/* eslint-disable unicorn/filename-case -- disabled */
/* eslint-disable jsx-a11y/click-events-have-key-events -- disabled */
/* eslint-disable jsx-a11y/no-static-element-interactions -- disabled */
"use client";

import { useRouter } from "next/navigation";
import React from "react";

import styles from "./notFound.module.css";

/**
 * Represents the page that displays when the user navigates to a previously undiscovered page
 *
 * @returns The 404 page
 */
const NotFoundPage = (): JSX.Element => {
    const router = useRouter();

    const goBackCallback = React.useCallback(() => {
        router.back();
    }, [router]);

    const goHomeCallback = React.useCallback(() => {
        router.push("/");
    }, [router]);

    return (
        <div className="h-screen w-screen flex flex-col justify-center items-center">
            <div className="bg-sky-500 bg-opacity-90 p-2 rounded flex flex-col items-center w-1/2 gap-10">
                <h1
                    className={`${styles.wrong_page_header} text-white font-extrabold`}
                >
                    {"Wrong Page?"}
                </h1>
                <div className="flex flex-row justify-between w-2/3">
                    <div
                        className="font-bold w-fit text-center hover:text-white hover:bg-sky-600 transition-colors cursor-pointer rounded p-1 px-2"
                        onClick={goBackCallback}
                    >
                        {"Go back?"}
                    </div>
                    <div
                        className="font-bold w-fit text-center hover:text-white hover:bg-sky-600 transition-colors cursor-pointer rounded p-1 px-2"
                        onClick={goHomeCallback}
                    >
                        {"Go home?"}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;
