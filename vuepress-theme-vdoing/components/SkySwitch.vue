<script>
import storage from 'good-storage' // 本地存储

export default {
  name: 'SkySwitch',
  data() {
    return {
      modeSwitch: false,
    }
  },
  methods: {
    onMyInfoShow() {
      let timer = setTimeout(() => {
        this.modeSwitch = !this.modeSwitch
        this.$emit('toggle-theme-mode', this.modeSwitch ? 'dark' : 'light')
        clearTimeout(timer)
      }, 200)
    },
  },
  created() {
    this.modeSwitch = storage.get('mode') === 'dark' ? true : false
  },
  mounted() {
    this.$refs['toggle'].checked = this.modeSwitch
  },
  render() {
    return (
      <div class="sky-switch">
        <label for="toggle">
          <input
            ref="toggle"
            id="toggle"
            type="checkbox"
            onClick={() => {
              this.onMyInfoShow()
            }}
          />
          <div></div>
        </label>
      </div>
    )
  },
}
</script>

<style lang="scss" scoped>
.sky-switch {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 1rem;
  width: 100%;
  // 按钮宽度
  $button-width: 3rem;
  // 按钮高度
  $button-height: 1.77rem;
  // 开关 直径
  $toggle-diameter: 1.53rem;
  // 按钮开关 偏移
  $button-toggle-offset: ($button-height - $toggle-diameter) / 2;
  // 开关 影子偏移
  $toggle-shadow-offset: 0.06rem;
  // 开关 长按时候宽度
  $toggle-wider: 2.01rem;
  // 浅灰色
  $color-grey: #e9e9e9;
  // 开关 开的时候背景颜色
  $color-green: #11a8cd;
  @media (prefers-color-scheme: dark) {
    $color-grey: #39393d;
  }
  @media (prefers-color-scheme: light) {
    $color-grey: #e9e9e9;
  }
  /* 按钮外部 */
  div {
    position: relative;
    width: $button-width;
    height: $button-height;
    background: $color-grey;
    border-radius: $button-height / 2;
    transition: 0.3s all ease-in-out;
    /* 按钮🔘 */
    &::after {
      content: '🌝';
      position: absolute;
      top: $button-toggle-offset;
      display: flex;
      justify-content: center;
      align-items: center;
      width: $toggle-diameter;
      height: $toggle-diameter;
      font-size: $toggle-diameter;
      line-height: $toggle-diameter;
      border-radius: $toggle-diameter / 2;
      transform: translateX($button-toggle-offset);
      box-shadow: $toggle-shadow-offset 0 ($toggle-shadow-offset) * 4 rgba(0, 0, 0, 0.1);
      transition: 0.3s all ease-in-out;
    }
  }
  input[type='checkbox'] {
    display: none;
    /* 如过按钮是开，背景颜色变色，加上移动动画，并且 影子在左边 */
    &:checked {
      & + div {
        background: $color-green;
        &::after {
          content: '🌚';
          transform: translateX($button-width - $toggle-diameter - $button-toggle-offset);
          box-shadow: ($toggle-shadow-offset) * (-1) 0 ($toggle-shadow-offset) * 4 rgba(0, 0, 0, 0.1);
        }
      }
    }
    /* 单击后改变里面🔘的宽度 */
    &:active {
      & + div {
        &::after {
          width: $toggle-wider;
        }
      }
    }
    /* 如果🔘是开，单击后 改变动画位置 */
    &:checked:active {
      & + div {
        &::after {
          transform: translateX($button-width - $toggle-wider - $button-toggle-offset);
        }
      }
    }
  }
}
</style>
