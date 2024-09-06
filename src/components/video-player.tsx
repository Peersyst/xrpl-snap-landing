"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { PlayIcon } from "lucide-react";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export function VideoPlayer(): JSX.Element {
    const [playing, setPlaying] = useState(false);

    return (
        <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden">
            <ReactPlayer url="https://www.youtube.com/watch?v=hG9gshvvZ8E" playing={playing} controls={false} width="100%" height="100%" />
            {!playing && (
                <Button
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-3"
                    variant="secondary"
                    onClick={() => setPlaying(true)}
                >
                    <PlayIcon className="h-5 w-5" />
                    <span>Play video</span>
                </Button>
            )}
        </div>
    );
}
