import React from 'react';
import { User, Settings, ChevronRight, Shield, CreditCard, HelpCircle, LogOut } from 'lucide-react';
import { userProfile } from '../data/mockData';

const Profile = () => {
  return (
    <div className="p-4 md:p-8 text-white pb-24">
      <h2 className="text-2xl font-bold mb-6">Profile</h2>
      
      {/* User Info Card */}
      <div className="bg-zinc-900 rounded-xl p-6 mb-6 border border-zinc-800 flex items-center gap-4">
        <div className="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center">
          <User size={32} className="text-zinc-400" />
        </div>
        <div>
          <h3 className="text-lg font-semibold">{userProfile.name}</h3>
          <p className="text-zinc-500 text-sm">ID: {userProfile.id}</p>
          {userProfile.isVerified && (
            <span className="inline-block mt-1 px-2 py-0.5 bg-green-900/30 text-green-500 text-xs rounded border border-green-900/50">
              Verified
            </span>
          )}
        </div>
      </div>

      {/* Account Stats */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-800">
          <p className="text-zinc-500 text-xs mb-1">Total Balance</p>
          <p className="text-xl font-bold">{userProfile.balance}</p>
        </div>
        <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-800">
          <p className="text-zinc-500 text-xs mb-1">Total Profit</p>
          <p className="text-xl font-bold text-green-500">{userProfile.profit}</p>
        </div>
      </div>

      {/* Menu Items */}
      <div className="space-y-2">
        <ProfileMenuItem icon={Settings} label="Settings" />
        <ProfileMenuItem icon={CreditCard} label="Payment Methods" />
        <ProfileMenuItem icon={Shield} label="Security" />
        <ProfileMenuItem icon={HelpCircle} label="Help & Support" />
        <ProfileMenuItem icon={LogOut} label="Log Out" danger />
      </div>
    </div>
  );
};

const ProfileMenuItem = ({ icon: Icon, label, danger }) => (
  <button className="w-full bg-zinc-900 hover:bg-zinc-800 p-4 rounded-xl border border-zinc-800 flex items-center justify-between transition-colors group">
    <div className="flex items-center gap-3">
      <Icon size={20} className={danger ? "text-red-500" : "text-zinc-400"} />
      <span className={danger ? "text-red-500 font-medium" : "text-zinc-200"}>{label}</span>
    </div>
    {!danger && <ChevronRight size={18} className="text-zinc-600 group-hover:text-zinc-400" />}
  </button>
);

export default Profile;