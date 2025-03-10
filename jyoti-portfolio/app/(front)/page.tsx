import React from 'react';
import RecentWritings from '../components/RecentWritings';

const FrontPage: React.FC = () => {

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="text-center">
                <div className="floating inline-block mb-10">
                    {/* <img src="https:/i.pravatar.cc/200" alt="Profile" className='rounded-full w-48 h-48 object-cover shadow-lg' /> */}
                    <img src='https://media.licdn.com/dms/image/v2/D5603AQES4yNbHj-w-g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1725975656672?e=1746662400&v=beta&t=zI88noMDgZkZ1AVCnSxFiPevaRojnB0z0EHHFzv1LyA' alt="Profile" className='rounded-full w-48 h-48 object-cover shadow-lg' />
                </div>
                <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4 underline">&#x1F468;&#x200D;&#x1F4BB; I am Jyoti</h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 text-balance">A full-stack alchemist at the keyboard&#x2328;, a dreamer with a decade of crafting digital realms, blending &#x1F6E0;&#xFE0F; .NET and beyond into scalable⏫, cloud-native harmonies, where innovation waltzes with purpose and every keystroke's rhythm whispers dreams into existence</p>
            </div>
            <RecentWritings />
        </div>
    );
};

export default FrontPage;
