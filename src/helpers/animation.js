export default {
  methods: {
    aosAttribute(attribute, offset, duration, easing, anchorPlacement, delay) {
      return {
        'data-aos':attribute,
        'data-aos-offset': offset,
        'data-aos-duration': duration,
        'data-aos-easing': easing,
        'data-aos-anchor-placement': anchorPlacement,
        'data-aos-delay': delay,
      };
    },
  },
};