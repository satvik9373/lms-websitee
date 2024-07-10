"use client"
import { useState } from 'react';

const Main = () => {
  const [billPlan, setBillPlan] = useState('lifetime');

  const plans = [
    {
      name: 'Easy',
      discretion: 'Explore the art of crafting captivating digital themes, from basic concepts to advanced design techniques, in our comprehensive course.',
      price: {
        lifetime: 599,
        annually: 29 * 12 - 199,
      },
      features: ['24/7 Customer Support', 'Your dashboard',  'User-Friendly Technology',  '100% Safe'],
    },
    
    {
      name: 'Advance',
      discretion: 'Master the strategies and tactics of successful dropshipping with our comprehensive course. Learn how to build and scale a profitable online store without inventory hassles.',
      price: {
        lifetime: 2999,
        annually: 139 * 12 - 100,
      },
      features: ['Real-World projects', 'Your dashboard', 'Advanced Concepts', 'Chat support' , '100% safe'],
    },
  ];

  return (
    <main className="mx-4 my-16">
      <div className="text-center">
        <h1 className="mb-4 text-2xl font-normal md:text-3xl lg:text-4xl">
        Reach  <span className="font-semibold">millionaire</span> heights with our  <span className="font-semibold">insights.</span>
        </h1>
        <p className="text-sm font-normal text-gray-400">
        "Navigate the world of IT with our expert guidance, propelling you towards success and innovation."
        </p>
        <p className="text-sm font-normal text-gray-400">
          It start from here! You can teach yourself what you really like.
        </p>
      </div>

      <div className="flex items-center justify-center mt-6 space-x-6">
        <button
          onClick={() => setBillPlan('monthly')}
          className={`${
            billPlan === 'monthly'
              ? 'border-gray-700 text-gray-700'
              : 'border-transparent text-gray-400'
          } border-b-2 focus:outline-none`}
        >
          Bill Lifetime
        </button>
     
      </div>

      <div className="grid gap-8 mt-16 md:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan) => (
          <div key={plan.name} className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="mb-2 text-xl font-medium">{plan.name}</h2>
              <p className="mb-6 text-gray-400">{plan.discretion}</p>
              <div className="flex items-baseline">
                <span className="text-4xl font-bold">₹{plan.price[billPlan]}</span>
                <span className="ml-1 text-xl font-medium text-gray-400">/{billPlan}</span>
              </div>
              <ul className="my-6 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center space-x-3">
                    <svg
                      className="w-5 h-5 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-2 text-white bg-indigo-600 rounded-full hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Main;
