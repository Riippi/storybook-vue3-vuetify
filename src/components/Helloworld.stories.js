import HelloWorld from './HelloWorld.vue';

export default {
  title: 'My hello world',
  component: HelloWorld,
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { HelloWorld },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    // Story args can be spread into the returned object
    return { ...args };
  },
  // Then, the spread values can be accessed directly in the template
  template: '<hello-world :msg="msg" />',
});

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  msg: "jau",
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  msg: "",
};
