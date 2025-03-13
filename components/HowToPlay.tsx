"use client";

import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause } from "@fortawesome/free-solid-svg-icons";
import { Volume2 } from "lucide-react";
import SpriteLooper from "./SpriteLooper";

const HowToPlay: React.FC = () => {
  return (
    <div className="p-8 font-favoritMono">
      <h2 className="font-optician uppercase text-white text-2xl font-bold mb-4">
        How to Play
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Controls Card */}
        <div className="border-2 border-white rounded-xl shadow p-6 text-white bg-slate-800 bg-opacity-50 backdrop-blur-md">
          <h2 className="text-2xl font-bold mb-4 text-white font-optician">
            Controls
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full table-auto text-white text-xs sm:text-base">
              <thead>
                <tr className="border border-slate-600 rounded-lg bg-slate-700">
                  <th className="px-4 py-2">Icon</th>
                  <th className="px-4 py-2">Command</th>
                  <th className="px-4 py-2">Key</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border border-slate-600 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors duration-150">
                  <td className="px-4 py-1 text-center">
                    <div className="w-12 h-12 rounded-full border border-white flex items-center justify-center mx-auto">
                      <FontAwesomeIcon icon={faPause} className="text-xl text-white" />
                    </div>
                  </td>
                  <td className="px-4 py-1 text-center">Pause</td>
                  <td className="px-4 py-1 text-center">
                    <kbd className="border px-2 py-1 rounded bg-slate-600 text-white">P</kbd>
                  </td>
                </tr>
                <tr className="border border-slate-600 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors duration-150">
                  <td className="px-4 py-1 text-center">
                    <div className="w-12 h-12 rounded-full border border-white flex items-center justify-center mx-auto">
                      <span className="text-3xl font-bold">⇧</span>
                    </div>
                  </td>
                  <td className="px-4 py-1 text-center">Jump</td>
                  <td className="px-4 py-1 text-center">
                    <kbd className="border px-2 py-1 rounded bg-slate-600 text-white">Space</kbd>
                  </td>
                </tr>
                <tr className="border border-slate-600 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors duration-150">
                  <td className="px-4 py-1 text-center">
                    <div className="w-12 h-12 rounded-full border border-white flex items-center justify-center mx-auto">
                      <Image src="/sprites/ui/rope-icon.png" alt="Rope" width={24} height={24} />
                    </div>
                  </td>
                  <td className="px-4 py-1 text-center">Rope</td>
                  <td className="px-4 py-1 text-center">
                    <kbd className="border px-2 py-1 rounded bg-slate-600 text-white">R</kbd>
                  </td>
                </tr>
                <tr className="border border-slate-600 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors duration-150">
                  <td className="px-4 py-1 text-center">
                    <div className="w-12 h-12 rounded-full border border-white flex items-center justify-center mx-auto">
                      <Image src="/sprites/ui/arrow-icon.png" alt="Shoot" width={24} height={24} />
                    </div>
                  </td>
                  <td className="px-4 py-1 text-center">Shoot</td>
                  <td className="px-4 py-1 text-center">
                    <kbd className="border px-2 py-1 rounded bg-slate-600 text-white">E</kbd>
                  </td>
                </tr>
                <tr className="border border-slate-600 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors duration-150">
                  <td className="px-4 py-1 text-center">
                    <div className="w-12 h-12 rounded-full border border-white flex items-center justify-center mx-auto">
                      <Volume2 className="w-6 h-6 text-white" />
                    </div>
                  </td>
                  <td className="px-4 py-1 text-center">Mute</td>
                  <td className="px-4 py-1 text-center">
                    <kbd className="border px-2 py-1 rounded bg-slate-600 text-white">M</kbd>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* UI Card */}
        <div className="border-2 border-white rounded-xl shadow p-6 text-white bg-slate-800 bg-opacity-50 backdrop-blur-md">
          <h2 className="text-2xl font-bold mb-4 text-white font-optician">
            UI
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full table-auto text-white text-xs sm:text-base">
              <thead>
                <tr className="border border-slate-600 rounded-lg bg-slate-700">
                  <th className="px-4 py-2">Icon</th>
                  <th className="px-4 py-2">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border border-slate-600 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors duration-150">
                  <td className="px-4 py-1 text-center">
                    <div className="w-12 h-12 rounded-full border border-white flex items-center justify-center mx-auto">
                      <Image src="/sprites/ui/heart-icon.png" alt="Lives" width={24} height={24} />
                    </div>
                  </td>
                  <td className="px-4 py-1 text-center">Lives</td>
                </tr>
                <tr className="border border-slate-600 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors duration-150">
                  <td className="px-4 py-1 text-center">
                    <div className="w-12 h-12 rounded-full border border-white flex items-center justify-center mx-auto">
                      <Image src="/sprites/ui/shield-icon.png" alt="Shield Lives" width={24} height={24} />
                    </div>
                  </td>
                  <td className="px-4 py-1 text-center">Shield Lives</td>
                </tr>
                <tr className="border border-slate-600 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors duration-150">
                  <td className="px-4 py-1 text-center">
                    <div className="w-12 h-12 rounded-full border border-white flex items-center justify-center mx-auto">
                      <Image src="/sprites/ui/arrow-icon.png" alt="Arrows" width={24} height={24} />
                    </div>
                  </td>
                  <td className="px-4 py-1 text-center">Arrow Count</td>
                </tr>
                <tr className="border border-slate-600 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors duration-150">
                  <td className="px-4 py-1 text-center">
                    <div className="w-12 h-12 rounded-full border border-white flex items-center justify-center mx-auto">
                      <Image src="/sprites/ui/coin-icon.png" alt="Coins" width={24} height={24} />
                    </div>
                  </td>
                  <td className="px-4 py-1 text-center">Coins</td>
                </tr>
                <tr className="border border-slate-600 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors duration-150">
                  <td className="px-4 py-1 text-center">
                    <div className="w-12 h-12 rounded-full border border-white flex items-center justify-center mx-auto">
                      <Image src="/sprites/ui/skull-icon.png" alt="Kill Count" width={24} height={24} />
                    </div>
                  </td>
                  <td className="px-4 py-1 text-center">Kill Count</td>
                </tr>
                <tr className="border border-slate-600 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors duration-150">
                  <td className="px-4 py-1 text-center">
                    <div className="w-12 h-12 rounded-full border border-white flex items-center justify-center mx-auto">
                      <Image src="/sprites/ui/rope-icon.png" alt="Rope Meter" width={24} height={24} />
                    </div>
                  </td>
                  <td className="px-4 py-1 text-center">Rope Meter</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* NPC List Card */}
        <div className="border-2 border-white rounded-xl shadow p-6 text-white bg-slate-800 bg-opacity-50 backdrop-blur-md">
          <h2 className="text-2xl font-bold mb-4 text-white font-optician">
            Ally List
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full table-auto text-white text-xs sm:text-base">
              <thead>
                <tr className="border border-slate-600 rounded-lg bg-slate-700">
                  <th className="px-4 py-2">Sprite</th>
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border border-slate-600 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors duration-150">
                  <td className="px-4 py-1 text-center">
                    <SpriteLooper
                      path="/sprites/npc/raider.png"
                      width={370}
                      height={70}
                      sliceCount={4}
                      speed={8}
                      offset={-5}
                    />
                  </td>
                  <td className="px-4 py-1 text-center">Player</td>
                  <td className="px-4 py-1 text-center">a noble hero</td>
                </tr>
                <tr className="border border-slate-600 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors duration-150">
                  <td className="px-4 py-1 text-center">
                    <SpriteLooper
                      path="/sprites/npc/raider.png"
                      width={370}
                      height={70}
                      sliceCount={4}
                      speed={8}
                      offset={-5}
                      colorVariant="green"
                    />
                  </td>
                  <td className="px-4 py-1 text-center">Green Raider</td>
                  <td className="px-4 py-1 text-center">gives 1 life</td>
                </tr>
                <tr className="border border-slate-600 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors duration-150">
                  <td className="px-4 py-1 text-center">
                    <div className="inline-block transform -scale-x-100 origin-left ml-16">
                      <SpriteLooper
                        path="/sprites/npc/bird.png"
                        width={300}
                        height={145}
                        sliceCount={2}
                        speed={4}
                        offset={0}
                        colorVariant="pink"
                      />
                    </div>
                  </td>
                  <td className="px-4 py-1 text-center">Bird</td>
                  <td className="px-4 py-1 text-center">gives shield</td>
                </tr>
                <tr className="border border-slate-600 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors duration-150">
                  <td className="px-4 py-1 text-center">
                    <SpriteLooper
                      path="/sprites/npc/rope-man.png"
                      width={370}
                      height={70}
                      sliceCount={4}
                      speed={8}
                      offset={-5}
                    />
                  </td>
                  <td className="px-4 py-1 text-center">Cowboy</td>
                  <td className="px-4 py-1 text-center">gives rope</td>
                </tr>
                <tr className="border border-slate-600 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors duration-150">
                  <td className="px-4 py-1 text-center">
                    <div className="transform -scale-x-100">
                      <SpriteLooper
                        path="/sprites/npc/cart.png"
                        width={600}
                        height={90}
                        sliceCount={3}
                        speed={4}
                        offset={5}
                      />
                    </div>
                  </td>
                  <td className="px-4 py-1 text-center">Cart</td>
                  <td className="px-4 py-1 text-center">coins to arrows</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Enemy List Card */}
        <div className="border-2 border-white rounded-xl shadow p-6 text-white bg-slate-800 bg-opacity-50 backdrop-blur-md">
          <h2 className="text-2xl font-bold mb-4 text-white font-optician">
            Enemy List
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full table-auto text-white text-xs sm:text-base">
              <thead>
                <tr className="border border-slate-600 rounded-lg bg-slate-700">
                  <th className="px-4 py-2">Sprite</th>
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border border-slate-600 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors duration-150">
                  <td className="px-4 py-1 text-center">
                    <SpriteLooper
                      path="/sprites/npc/raider.png"
                      width={370}
                      height={70}
                      sliceCount={4}
                      speed={8}
                      offset={-5}
                      colorVariant="red"
                    />
                  </td>
                  <td className="px-4 py-1 text-center">Red Raider</td>
                  <td className="px-4 py-1 text-center">your main foe</td>
                </tr>
                <tr className="border border-slate-600 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors duration-150">
                  <td className="px-4 py-1 text-center">
                    <SpriteLooper
                      path="/sprites/npc/raider.png"
                      width={370}
                      height={70}
                      sliceCount={4}
                      speed={8}
                      offset={-5}
                      colorVariant="black"
                    />
                  </td>
                  <td className="px-4 py-1 text-center">Black Raider</td>
                  <td className="px-4 py-1 text-center">extra fast!</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToPlay;
