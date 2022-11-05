import { Fancybox } from "@fancyapps/ui";

Fancybox.bind("[data-fancybox]", {
    on: {
        load: (fancybox, slide) => {
            //slide.$image.alt = slide.$thumb.alt
        },
    },
});