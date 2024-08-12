import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-full bg-[#F0F0F0] -z-30 -mt-24">
      <div className="max-w-[1240px] w-full h-auto mx-auto flex flex-row pt-36 ">
        <div className="max-w-64 w-full h-auto flex flex-col mr-24">
          <h1 className="text-3xl font-bold text-black mb-5">SHOP.CO</h1>
          <p className="text-sm text-muted-foreground font-light mb-7">
            We have clothes that suits your style and which you&apos;re proud to
            wear. From women to men.
          </p>
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center p-1 h-6 w-6 rounded-full bg-white hover:scale-105 cursor-pointer">
              <FaGithub className="text-black" />
            </div>
            <div className="flex items-center justify-center p-1 h-6 w-6 rounded-full bg-white hover:scale-105 cursor-pointer">
              <FaInstagram className="text-black" />
            </div>
            <div className="flex items-center justify-center p-1 h-6 w-6 rounded-full bg-white hover:scale-105 cursor-pointer">
              <FaFacebookF className="text-black" />
            </div>
            <div className="flex items-center justify-center p-1 h-6 w-6 rounded-full bg-white hover:scale-105 cursor-pointer">
              <FaTwitter className="text-black" />
            </div>
          </div>
        </div>
        <div className="flex w-full justify-between mb-12">
          <div className="">
            <h1 className="text-lg font-semibold text-black mb-5">Company</h1>
            <p className="text-muted-foreground mb-2 font-light">About</p>
            <p className="text-muted-foreground mb-2 font-light">Features</p>
            <p className="text-muted-foreground mb-2 font-light">Works</p>
            <p className="text-muted-foreground mb-2 font-light">Career</p>
          </div>
          <div className="">
            <h1 className="text-lg font-semibold text-black mb-5">Help</h1>
            <p className="text-muted-foreground mb-2 font-light">
              Customer Support
            </p>
            <p className="text-muted-foreground mb-2 font-light">
              Delivery Details
            </p>
            <p className="text-muted-foreground mb-2 font-light">
              Terms & Conditions
            </p>
            <p className="text-muted-foreground mb-2 font-light">
              Privacy Policy
            </p>
          </div>
          <div className="">
            <h1 className="text-lg font-semibold text-black mb-5">FAQ</h1>
            <p className="text-muted-foreground mb-2 font-light">Account</p>
            <p className="text-muted-foreground mb-2 font-light">
              Manage Deliveries
            </p>
            <p className="text-muted-foreground mb-2 font-light">Orders</p>
            <p className="text-muted-foreground mb-2 font-light">Payments</p>
          </div>
          <div className="">
            <h1 className="text-lg font-semibold text-black mb-5">Resources</h1>
            <p className="text-muted-foreground mb-2 font-light">Free eBooks</p>
            <p className="text-muted-foreground mb-2 font-light">
              Development Tutorial
            </p>
            <p className="text-muted-foreground mb-2 font-light">
              How to - Blog
            </p>
            <p className="text-muted-foreground mb-2 font-light">
              Youtube Playlist
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-[1240px] w-full h-auto mx-auto">
        <hr className="border-1 border-gray-300 w-full  " />
        <div className="flex items-center justify-between py-6">
          <p className="text-slate-500">
            Shop.co © 2000-2023, All Rights Reserved
          </p>
          <div className="flex items-center gap-3">
            <div className="w-14 h-9 rounded-md bg-white flex items-center justify-center">
              <FaCcVisa className="text-2xl" />
            </div>
            <div className="w-14 h-9 rounded-md bg-white flex items-center justify-center">
              <FaCcPaypal className="text-2xl" />
            </div>
            <div className="w-14 h-9 rounded-md bg-white flex items-center justify-center">
              <FaCcMastercard className="text-2xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
