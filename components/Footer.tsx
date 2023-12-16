import React from "react";
import OffsideFont from "@/wrappers/OffsideFont";
import Socials from "./blockLevel/Socials";
import QuoteBlock from "./blockLevel/QuoteBlock";

function Footer() {
    return (
        <OffsideFont extra="w-full">
            <div className="flex justify-between border-t border-muted w-full items-center px-6 py-2 flex-wrap">
                <Socials />
                <QuoteBlock />
            </div>
        </OffsideFont>
    );
}

export default Footer;
