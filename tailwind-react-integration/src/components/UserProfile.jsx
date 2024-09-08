function UserProfile() {
  return (
    <div className="bg-gray-100 p-4 sm:p-4 md:p-8 max-w-xs md:max-w-sm mx-auto my-10 md:my-20 rounded-lg shadow-lg">
      <img
        className="w-24 h-24 sm:w-36 sm:h-36 rounded-full mx-auto"
        src="https://via.placeholder.com/150"
        alt="User"
      />
      <h1 className="text-lg md:text-xl text-blue-800 my-4">John Doe</h1>
      <p className="text-sm sm:text-base text-gray-600">
        Developer at Example Co. Loves to write code and explore new technologies.
      </p>
    </div>
  );
}

export default UserProfile;
