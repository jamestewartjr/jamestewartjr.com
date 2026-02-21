jest.mock('next/server', () => ({
  NextResponse: {
    json: (body: unknown, init?: { status?: number }) => ({
      status: init?.status ?? 200,
      json: async () => body,
    }),
  },
}));

const createRequest = (body: Record<string, unknown>) =>
  ({
    json: async () => body,
  } as Request);

describe('POST /api/subscribe', () => {
  const originalEnv = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = {
      ...originalEnv,
      BEEHIIV_API_KEY: 'test-api-key',
      BEEHIIV_PUBLICATION_ID: 'pub_test_123',
    };
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  afterAll(() => {
    process.env = originalEnv;
  });

  it('returns 400 when email is missing', async () => {
    const { POST } = await import('../route');

    const response = await POST(createRequest({ custom_fields: {} }));
    const payload = await response.json();

    expect(response.status).toBe(400);
    expect(payload).toEqual({ error: 'Email is required' });
    expect(global.fetch).not.toHaveBeenCalled();
  });

  it('returns 201 when beehiiv subscription succeeds', async () => {
    const fetchMock = global.fetch as jest.Mock;
    fetchMock.mockResolvedValue({
      ok: true,
    });

    const { POST } = await import('../route');
    const response = await POST(
      createRequest({
        email: 'test@example.com',
        custom_fields: { source: 'site' },
      })
    );
    const payload = await response.json();

    expect(response.status).toBe(201);
    expect(payload).toEqual({ message: 'Successfully subscribed!' });
    expect(fetchMock).toHaveBeenCalledTimes(1);

    const [url, options] = fetchMock.mock.calls[0];
    expect(url).toBe(
      'https://api.beehiiv.com/v2/publications/pub_test_123/subscriptions'
    );
    expect(options.method).toBe('POST');
    expect(options.headers).toEqual({
      'Content-Type': 'application/json',
      Authorization: 'Bearer test-api-key',
    });

    const requestBody = JSON.parse(options.body as string);
    expect(requestBody).toEqual({
      email: 'test@example.com',
      reactivate_existing: false,
      send_welcome_email: true,
      utm_source: 'website',
      utm_medium: 'organic',
      custom_fields: { source: 'site' },
      referring_site: 'jamestewartjr.com',
    });
  });

  it('returns upstream beehiiv error and status when subscription fails', async () => {
    const fetchMock = global.fetch as jest.Mock;
    fetchMock.mockResolvedValue({
      ok: false,
      status: 409,
      json: async () => ({ message: 'Already subscribed' }),
    });

    const { POST } = await import('../route');
    const response = await POST(createRequest({ email: 'test@example.com' }));
    const payload = await response.json();

    expect(response.status).toBe(409);
    expect(payload).toEqual({ error: 'Already subscribed' });
  });

  it('returns 500 when the request throws unexpectedly', async () => {
    const fetchMock = global.fetch as jest.Mock;
    fetchMock.mockRejectedValue(new Error('network failure'));

    const { POST } = await import('../route');
    const response = await POST(createRequest({ email: 'test@example.com' }));
    const payload = await response.json();

    expect(response.status).toBe(500);
    expect(payload).toEqual({ error: 'Internal server error' });
  });
});
