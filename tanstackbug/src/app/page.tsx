import { redirect } from "next/navigation";
import React from "react";

// import type { PageProperties } from "@/@types/next";
// import { getSession } from "@/common/helpers/api/session";
// import Landing from "@/modules/Landing/Landing";

/**
 *
 * @param param0
 */
const Page = ({
    params: _parameters,
    searchParams: _searchParameters,
}: PageProperties): JSX.Element => {
    const session = getSession();

    if (session !== undefined) {
        redirect("/workspaces/");
    }

    return <div>{"hello there"}</div>;
};

export default Page;
