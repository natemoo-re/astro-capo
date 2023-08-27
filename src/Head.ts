import type { SSRResult } from "astro";
// @ts-expect-error using astro internals
import { renderAllHeadContent } from "astro/runtime/server/render/head.js";
// @ts-expect-error using astro internals
import { createComponent, unescapeHTML, renderSlotToString, spreadAttributes } from "astro/runtime/server/index.js";
import capo from "./capo/index.ts";

export const Head = createComponent({
    factory: async (result: SSRResult, props: Record<string, any>, slots: Record<string, any>) => {
        let head = '';
        head += `<head${spreadAttributes(props)} data-capo>`
        head += await renderSlotToString(result, slots.default);
        head += renderAllHeadContent(result);
        head += '</head>';
        return unescapeHTML(capo(head));
    }
})
