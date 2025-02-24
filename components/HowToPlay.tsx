"use client";

import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause } from "@fortawesome/free-solid-svg-icons";
import { Volume2 } from "lucide-react";
import SpriteLooper from "./SpriteLooper";

const HowToPlay: React.FC = () => {
  return (
    <div className="p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Controls Card */}
        <div className="border-2 border-white rounded-xl shadow p-6 text-white">
          <h2 className="text-2xl font-bold mb-4 text-white">Controls</h2>
          <Image
            src="/how-to-play/controls.png"
            alt="Controls diagram"
            width={800}
            height={400}
            className="w-full mb-6 rounded-lg"
          />
          <ul className="space-y-4">
            <li className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mr-4">
                <FontAwesomeIcon
                  icon={faPause}
                  className="text-xl text-gray-700"
                />
              </div>
              <span>
                Pause &mdash; press{" "}
                <kbd className="bg-gray-200 border px-2 py-1 rounded">P</kbd>
              </span>
            </li>
            <li className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mr-4">
                <span className="text-xl font-bold">⇧</span>
              </div>
              <span>
                Jump &mdash; press{" "}
                <kbd className="bg-gray-200 border px-2 py-1 rounded">
                  Space
                </kbd>
              </span>
            </li>
            <li className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mr-4">
                <Image
                  src="/sprites/ui/rope-icon.png"
                  alt="Rope"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>
              <span>
                Rope &mdash; press{" "}
                <kbd className="bg-gray-200 border px-2 py-1 rounded">R</kbd>
              </span>
            </li>
            <li className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mr-4">
                <Image
                  src="/sprites/ui/arrow-icon.png"
                  alt="Shoot"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>
              <span>
                Shoot &mdash; press{" "}
                <kbd className="bg-gray-200 border px-2 py-1 rounded">E</kbd>
              </span>
            </li>
            <li className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mr-4">
                <Volume2 className="w-6 h-6 text-gray-700" />
              </div>
              <span>
                Mute &mdash; press{" "}
                <kbd className="bg-gray-200 border px-2 py-1 rounded">M</kbd>
              </span>
            </li>
          </ul>
        </div>

        {/* UI Card */}
        <div className="border-2 border-white rounded-xl shadow p-6 text-white">
          <h2 className="text-2xl font-bold mb-4 text-white">UI</h2>
          <ul className="space-y-4">
            <li className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mr-4">
                <Image
                  src="/sprites/ui/heart-icon.png"
                  alt="Lives"
                  width={24}
                  height={24}
                />
              </div>
              <span>Lives</span>
            </li>
            <li className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mr-4">
                <Image
                  src="/sprites/ui/shield-icon.png"
                  alt="Shield Lives"
                  width={24}
                  height={24}
                />
              </div>
              <span>Shield Lives</span>
            </li>
            <li className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mr-4">
                <Image
                  src="/sprites/ui/arrow-icon.png"
                  alt="Arrows"
                  width={24}
                  height={24}
                />
              </div>
              <span>Arrow Count</span>
            </li>
            <li className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mr-4">
                <Image
                  src="/sprites/ui/coin-icon.png"
                  alt="Coins"
                  width={24}
                  height={24}
                />
              </div>
              <span>Coins</span>
            </li>
            <li className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mr-4">
                <Image
                  src="/sprites/ui/skull-icon.png"
                  alt="Kill Count"
                  width={24}
                  height={24}
                />
              </div>
              <span>Kill Count</span>
            </li>
            <li className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mr-4">
                <Image
                  src="/sprites/ui/rope-icon.png"
                  alt="Rope Meter"
                  width={24}
                  height={24}
                />
              </div>
              <span>Rope Meter</span>
            </li>
          </ul>
        </div>

        {/* NPC List Card */}
        <div className="border-2 border-white rounded-xl shadow p-6 text-white bg-slate-700">
          <h2 className="text-2xl font-bold mb-4 text-white">Ally List</h2>
          <table className="w-full table-auto text-white">
            <thead>
              <tr>
                <th className="px-4 py-2">Sprite</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2">
                  <SpriteLooper path="/sprites/npc/raider.png" width={370} height={70} sliceCount={4} speed={8} offset={-5} />
                </td>
                <td className="px-4 py-2">Player</td>
                <td className="px-4 py-2">a noble hero</td>
              </tr>
              <tr>
                <td className="px-4 py-2">
                  <SpriteLooper path="/sprites/npc/raider.png" width={370} height={70} sliceCount={4} speed={8} offset={-5} colorVariant="green" />
                </td>
                <td className="px-4 py-2">Green Raider</td>
                <td className="px-4 py-2">gives 1 life</td>
              </tr>
              <tr>
                <td className="px-4 py-2">
                  <SpriteLooper path="/sprites/npc/bird.png" width={300} height={145} sliceCount={2} speed={4} offset={5} colorVariant="pink" />
                </td>
                <td className="px-4 py-2">Bird</td>
                <td className="px-4 py-2">gives shield</td>
              </tr>
              <tr>
                <td className="px-4 py-2">
                  <SpriteLooper path="/sprites/npc/rope-man.png" width={370} height={70} sliceCount={4} speed={8} offset={-5} />
                </td>
                <td className="px-4 py-2">Cowboy</td>
                <td className="px-4 py-2">gives rope</td>
              </tr>
              <tr>
                <td className="px-4 py-2">
                  <SpriteLooper path="/sprites/npc/cart.png" width={600} height={90} sliceCount={3} speed={4} offset={5} />
                </td>
                <td className="px-4 py-2">Cart</td>
                <td className="px-4 py-2">exchanges coins for arrows</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Enemy List Card */}
        <div className="border-2 border-white rounded-xl shadow p-6 text-white bg-slate-700">
          <h2 className="text-2xl font-bold mb-4 text-white">Enemy List</h2>
          <table className="w-full table-auto text-white">
            <thead>
              <tr>
                <th className="px-4 py-2">Sprite</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2">
                  <SpriteLooper path="/sprites/npc/raider.png" width={370} height={70} sliceCount={4} speed={8} offset={-5} colorVariant="red" />
                </td>
                <td className="px-4 py-2">Red Raider</td>
                <td className="px-4 py-2">your main foe</td>
              </tr>
              <tr>
                <td className="px-4 py-2">
                  <SpriteLooper path="/sprites/npc/raider.png" width={370} height={70} sliceCount={4} speed={8} offset={-5} colorVariant="black" />
                </td>
                <td className="px-4 py-2">Black Raider</td>
                <td className="px-4 py-2">extra fast!</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HowToPlay;
