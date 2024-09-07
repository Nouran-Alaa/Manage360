import { useState } from 'react';
import { PencilSquareIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const Profile = () => {
  const image = 'https://picsum.photos/200/300';

  // Load initial profile information from localStorage or default values
  const [firstName, setFirstName] = useState(localStorage.getItem('firstName'));
  const [lastName, setLastName] = useState(localStorage.getItem('lastName'));
  const [email, setEmail] = useState(localStorage.getItem('email'));
  const [phone, setPhone] = useState(localStorage.getItem('phone'));
  const [bio, setBio] = useState(localStorage.getItem('bio'));
  const [country, setCountry] = useState(localStorage.getItem('country'));
  const [city, setCity] = useState(localStorage.getItem('city'));
  const [postalCode, setPostalCode] = useState(
    localStorage.getItem('postalCode')
  );

  // State to manage editing
  const [isEditingPersonalInfo, setIsEditingPersonalInfo] = useState(false);
  const [isEditingAddress, setIsEditingAddress] = useState(false);

  // Function to save personal information to localStorage
  const handleSavePersonalInfo = () => {
    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
    localStorage.setItem('email', email);
    localStorage.setItem('phone', phone);
    localStorage.setItem('bio', bio);
    setIsEditingPersonalInfo(false);
  };

  // Function to save address information to localStorage
  const handleSaveAddress = () => {
    localStorage.setItem('country', country);
    localStorage.setItem('city', city);
    localStorage.setItem('postalCode', postalCode);
    setIsEditingAddress(false);
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="mb-10 overflow-hidden rounded-2xl bg-white shadow-lg">
        <div className="p-8">
          <div className="grid grid-cols-1 gap-10">
            <h1 className="text-3xl font-bold">My Profile</h1>
            <div className="flex items-center gap-8 space-y-4 rounded-3xl border-2 p-5">
              <img
                className="h-20 w-20 rounded-full border-4 border-white shadow-lg"
                src={image}
                alt={`${firstName} ${lastName}`}
              />
              <div className="text-left">
                <h2 className="text-2xl font-bold text-gray-800">
                  {firstName} {lastName}
                </h2>
                <p className="mt-2 font-bold text-gray-500">{bio}</p>
                <p className="mt-2 text-sm font-bold text-gray-400">{city}</p>
              </div>
            </div>

            {/* Personal Information Section */}
            <div className="space-y-4 rounded-3xl border-2 p-5">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold">Personal Information</h3>
                <button
                  onClick={() =>
                    setIsEditingPersonalInfo(!isEditingPersonalInfo)
                  }
                  className="flex items-center justify-center gap-1 space-x-2 rounded-full border border-stone-300 px-4 py-2 text-center text-sm font-semibold tracking-wide text-stone-800 outline-none transition-colors duration-300 hover:bg-stone-800 hover:text-white"
                >
                  <PencilSquareIcon className="h-6 w-6 text-gray-400" />
                  {isEditingPersonalInfo ? 'Cancel' : 'Edit'}
                </button>
              </div>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                {isEditingPersonalInfo ? (
                  <>
                    <div>
                      <p className="mt-2 font-bold text-gray-500">First Name</p>
                      <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="mt-2 w-full rounded border p-2"
                      />
                    </div>
                    <div>
                      <p className="mt-2 font-bold text-gray-500">Last Name</p>
                      <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="mt-2 w-full rounded border p-2"
                      />
                    </div>
                    <div>
                      <p className="mt-2 font-bold text-gray-500">
                        Email Address
                      </p>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-2 w-full rounded border p-2"
                      />
                    </div>
                    <div>
                      <p className="mt-2 font-bold text-gray-500">Phone</p>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="mt-2 w-full rounded border p-2"
                      />
                    </div>
                    <div>
                      <p className="mt-2 font-bold text-gray-500">Bio</p>
                      <input
                        type="text"
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                        className="mt-2 w-full rounded border p-2"
                      />
                    </div>
                    <div className="flex items-end justify-center">
                      <button
                        onClick={handleSavePersonalInfo}
                        className="flex h-1/2 w-1/3 items-center justify-center space-x-2 rounded-full border border-stone-300 bg-stone-800 px-4 py-2 text-center text-sm font-semibold tracking-wide text-white outline-none transition-colors duration-300 hover:bg-transparent hover:text-stone-800 disabled:cursor-not-allowed md:px-6 md:py-3"
                      >
                        Save
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <p className="mt-2 font-bold text-gray-500">First Name</p>
                      <p className="mt-2 font-bold">{firstName}</p>
                    </div>
                    <div>
                      <p className="mt-2 font-bold text-gray-500">Last Name</p>
                      <p className="mt-2 font-bold">{lastName}</p>
                    </div>
                    <div>
                      <p className="mt-2 font-bold text-gray-500">
                        Email Address
                      </p>
                      <p className="mt-2 font-bold">{email}</p>
                    </div>
                    <div>
                      <p className="mt-2 font-bold text-gray-500">Phone</p>
                      <p className="mt-2 font-bold">{phone}</p>
                    </div>
                    <div>
                      <p className="mt-2 font-bold text-gray-500">Bio</p>
                      <p className="mt-2 font-bold">{bio}</p>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Address Section */}
            <div className="space-y-4 rounded-3xl border-2 p-5">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold">Address</h3>
                <button
                  onClick={() => setIsEditingAddress(!isEditingAddress)}
                  className="flex items-center justify-center gap-1 space-x-2 rounded-full border border-stone-300 px-4 py-2 text-center text-sm font-semibold tracking-wide text-stone-800 outline-none transition-colors duration-300 hover:bg-stone-800 hover:text-white"
                >
                  <PencilSquareIcon className="h-6 w-6 text-gray-400" />
                  {isEditingAddress ? 'Cancel' : 'Edit'}
                </button>
              </div>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                {isEditingAddress ? (
                  <>
                    <div>
                      <p className="mt-2 font-bold text-gray-500">Country</p>
                      <input
                        type="text"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        className="mt-2 w-full rounded border p-2"
                      />
                    </div>
                    <div>
                      <p className="mt-2 font-bold text-gray-500">City/State</p>
                      <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="mt-2 w-full rounded border p-2"
                      />
                    </div>
                    <div>
                      <p className="mt-2 font-bold text-gray-500">
                        Postal Code
                      </p>
                      <input
                        type="text"
                        value={postalCode}
                        onChange={(e) => setPostalCode(e.target.value)}
                        className="mt-2 w-full rounded border p-2"
                      />
                    </div>
                    <div className="flex items-end justify-center">
                      <button
                        onClick={handleSaveAddress}
                        className="flex h-1/2 w-1/3 items-center justify-center space-x-2 rounded-full border border-stone-300 bg-stone-800 px-4 py-2 text-center text-sm font-semibold tracking-wide text-white outline-none transition-colors duration-300 hover:bg-transparent hover:text-stone-800 disabled:cursor-not-allowed md:px-6 md:py-3"
                      >
                        Save
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <p className="mt-2 font-bold text-gray-500">Country</p>
                      <p className="mt-2 font-bold">{country}</p>
                    </div>
                    <div>
                      <p className="mt-2 font-bold text-gray-500">City/State</p>
                      <p className="mt-2 font-bold">{city}</p>
                    </div>
                    <div>
                      <p className="mt-2 font-bold text-gray-500">
                        Postal Code
                      </p>
                      <p className="mt-2 font-bold">{postalCode}</p>
                    </div>
                  </>
                )}
              </div>
            </div>
            <Link
              to="/sign-in"
              className="text-red-500 border-2 border-red-500 px-2 py-5 flex justify-center items-center text-md font-semibold rounded-lg"
            >
              Sign Out
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
