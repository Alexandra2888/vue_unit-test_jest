import AppHeader from "../../src/components/AppHeader.vue";
import { mount } from "@vue/test-utils";

describe("AppHeader", () => {
  test("If the user is not logged in, do not show logged out button", () => {
    const wrapper = mount(AppHeader);
    expect(wrapper.find("button").isVisible()).toBe(false);
    expect(true).toBe(true);
  });

  test("If the user is logged in, show logged out button", async () => {
    const wrapper = mount(AppHeader);
    await wrapper.setData({ loggedIn: true });
    expect(wrapper.find("button").isVisible()).toBe(true);
  });
});
