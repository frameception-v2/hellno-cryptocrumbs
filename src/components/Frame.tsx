"use client";

import { useEffect, useCallback, useState } from "react";
import sdk, {
  AddFrame,
  SignIn as SignInCore,
  type Context,
} from "@farcaster/frame-sdk";
import confetti from 'canvas-confetti';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "~/components/ui/card";

import { config } from "~/components/providers/WagmiProvider";
import { truncateAddress } from "~/lib/truncateAddress";
import { base, optimism } from "wagmi/chains";
import { useSession } from "next-auth/react";
import { createStore } from "mipd";
import { Label } from "~/components/ui/label";
import { PROJECT_TITLE } from "~/lib/constants";

function ExampleCard() {
  return (
    <Card className="bg-gradient-to-br from-purple-900 via-purple-950 to-purple-900 border-purple-800/50 shadow-lg shadow-purple-900/30 hover:shadow-purple-700/40 transition-shadow duration-300 group">
      <CardHeader className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.1),transparent)]" />
        <CardTitle className="text-transparent bg-clip-text bg-gradient-to-r from-red-300 to-orange-100 font-bold text-2xl animate-pulse">
          🙅♂️💥 HELLNO! 💥🙅♀️
        </CardTitle>
        <CardDescription className="text-orange-200/90 mt-2">
          The world's most <span className="animate-gradient bg-gradient-to-r from-red-400 to-orange-300 bg-clip-text text-transparent">satisfying</span> rejection
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <button 
          onClick={() => {
            // Main explosion
            confetti({
              particleCount: 150,
              spread: 360,
              scalar: 1.5,
              origin: { y: 0.6 },
              particleOptions: {
                emoji: ['🔥','💥','💣','☠️','🚫','❌'],
                emojiSize: 40,
                spread: 360,
              },
              angle: 90,
              decay: 0.94
            });

            // Left side explosion
            confetti({
              particleCount: 75,
              spread: 180,
              scalar: 1.2,
              origin: { x: 0.2, y: 0.6 },
              particleOptions: {
                emoji: ['🔥','💥'],
                emojiSize: 35,
                spread: 180,
              },
              angle: 60,
              decay: 0.85
            });

            // Right side explosion
            confetti({
              particleCount: 75,
              spread: 180,
              scalar: 1.2,
              origin: { x: 0.8, y: 0.6 },
              particleOptions: {
                emoji: ['🔥','💥'],
                emojiSize: 35,
                spread: 180,
              },
              angle: 120,
              decay: 0.85
            });
          }}
          className="w-full py-4 bg-gradient-to-r from-red-600 to-orange-500 rounded-lg text-xl font-bold uppercase hover:from-red-700 hover:to-orange-600 transition-all duration-200 transform hover:scale-105 shadow-lg shadow-red-900/50 active:scale-95 hover:rotate-[-1deg] transition-transform"
        >
          💥🔥 HELLNO! 🔥💥
        </button>
        <div className="bg-red-900/30 p-3 rounded-lg border border-red-800/50 backdrop-blur-sm">
          <p className="text-xs text-orange-200/80 leading-relaxed">
            Warning: Pressing this button will unleash{" "}
            <span className="underline decoration-red-400 decoration-wavy">
              💥 unstoppable rejection energy
            </span>
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

export default function Frame() {
  const [isSDKLoaded, setIsSDKLoaded] = useState(false);
  const [context, setContext] = useState<Context.FrameContext>();

  const [added, setAdded] = useState(false);

  const [addFrameResult, setAddFrameResult] = useState("");

  const addFrame = useCallback(async () => {
    try {
      await sdk.actions.addFrame();
    } catch (error) {
      if (error instanceof AddFrame.RejectedByUser) {
        setAddFrameResult(`Not added: ${error.message}`);
      }

      if (error instanceof AddFrame.InvalidDomainManifest) {
        setAddFrameResult(`Not added: ${error.message}`);
      }

      setAddFrameResult(`Error: ${error}`);
    }
  }, []);

  useEffect(() => {
    const load = async () => {
      const context = await sdk.context;
      if (!context) {
        return;
      }

      setContext(context);
      setAdded(context.client.added);

      // If frame isn't already added, prompt user to add it
      if (!context.client.added) {
        addFrame();
      }

      sdk.on("frameAdded", ({ notificationDetails }) => {
        setAdded(true);
      });

      sdk.on("frameAddRejected", ({ reason }) => {
        console.log("frameAddRejected", reason);
      });

      sdk.on("frameRemoved", () => {
        console.log("frameRemoved");
        setAdded(false);
      });

      sdk.on("notificationsEnabled", ({ notificationDetails }) => {
        console.log("notificationsEnabled", notificationDetails);
      });
      sdk.on("notificationsDisabled", () => {
        console.log("notificationsDisabled");
      });

      sdk.on("primaryButtonClicked", () => {
        console.log("primaryButtonClicked");
      });

      console.log("Calling ready");
      sdk.actions.ready({});

      // Set up a MIPD Store, and request Providers.
      const store = createStore();

      // Subscribe to the MIPD Store.
      store.subscribe((providerDetails) => {
        console.log("PROVIDER DETAILS", providerDetails);
        // => [EIP6963ProviderDetail, EIP6963ProviderDetail, ...]
      });
    };
    if (sdk && !isSDKLoaded) {
      console.log("Calling load");
      setIsSDKLoaded(true);
      load();
      return () => {
        sdk.removeAllListeners();
      };
    }
  }, [isSDKLoaded, addFrame]);

  if (!isSDKLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div
      style={{
        paddingTop: context?.client.safeAreaInsets?.top ?? 0,
        paddingBottom: context?.client.safeAreaInsets?.bottom ?? 0,
        paddingLeft: context?.client.safeAreaInsets?.left ?? 0,
        paddingRight: context?.client.safeAreaInsets?.right ?? 0,
      }}
    >
      <div className="w-[300px] mx-auto py-2 px-2">
        <ExampleCard />
      </div>
    </div>
  );
}
