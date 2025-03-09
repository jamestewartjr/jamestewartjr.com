import Image from "next/image"

const ProfileImage = () => {
  return (
    <div className="relative mb-6">
      <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg">
        <Image
          src="/images/jamesstewartjr.jpg"
          alt="Profile picture of james stewart jr"
          width={160}
          height={160}
          className="object-cover"
          priority
        />
      </div>
    </div>
  )
} 

export default ProfileImage;