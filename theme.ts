import { buildLegacyTheme } from "sanity";

const props = {
    "--my-white": "#F4F2F3",
    "--my-black": "#1a1a1a",
    "--poma-brand": "#DED369",
    "--my-purple": "#C0A9BD",
    "--my-greylike": "#94A7AE",
    "--my-green": "#64766A",
};

export const pTheme = buildLegacyTheme({
    //base theme color
    "--black": props["--my-black"],
    "--white": props["--my-white"],

    "--gray": "#666",
    "--gray-base": "#666",

    "--component-bg": props["--my-black"],
    "--component-text-color": props["--my-white"],

    //Brand
    "--brand-primary": props["--poma-brand"],

    //Default button
    "--default-button-color": "#666",
    "--default-button-primary-color": props["--poma-brand"],
    "--default-button-success-color": props["--my-green"],
    "--default-button-warning-color": props["--my-greylike"],
    "--default-button-danger-color": props["--my-purple"],

    //state
    "--state-info-color": props["--poma-brand"],
    "--state-success-color": props["--my-green"],
    "--state-warning-color": props["--my-greylike"],
    "--state-danger-color": props["--my-purple"],

    //Navbar
    "--main-navigation-color": props["--my-black"],
    "--main-navigation-color--inverted": props["--my-white"],

    "--focus-color": props["--poma-brand"],

});

