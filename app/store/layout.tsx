import React from "react";

type Props = {
    children: React.ReactNode;
};

const layout = (props: Props) => {
    return <div className=" h-[calc(100vh-80px)]">{props.children}</div>;
};

export default layout;
