<script>
import storage from 'good-storage' // 本地存储

export default {
  name: 'SkySwitch',
  data() {
    return {
      modeSwitch: false,
    }
  },
  watch: {
    modeSwitch: {
      handler(newValue) {
        this.$refs['toggle'].checked = newValue
      },
    },
  },
  created() {
    this.modeSwitch = storage.get('mode') === 'dark' ? true : false
  },
  mounted() {
    this.modeObserver()
  },
  methods: {
    switch() {
      this.modeSwitch = !this.modeSwitch
      this.$emit('toggle-theme-mode', this.modeSwitch ? 'dark' : 'light')
    },
    /**
     * 观察body的class名，来判断是夜间模式还是别的
     */
    modeObserver() {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        const newColorScheme = e.matches ? 'dark' : 'light'
        this.$emit('toggle-theme-mode', newColorScheme)
      })
      // 选择需要观察变动的节点
      const targetNode = document.getElementsByTagName('body')[0]

      // 观察器的配置（需要观察什么变动）
      const config = { attributes: true, childList: false, subtree: false }

      // 当观察到变动时执行的回调函数
      const callback = (mutationsList, observer) => {
        this.modeSwitch = 'theme-mode-dark' === mutationsList[0].target.classList[0] ? true : false
      }

      // 创建一个观察器实例并传入回调函数
      const observer = new MutationObserver(callback)

      // 以上述配置开始观察目标节点
      observer.observe(targetNode, config)

      // 组件销毁之后，可停止观察
      this.$once('hook:beforeDestroy', () => observer.disconnect())
    },
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
              this.switch()
            }}
          />
          <div />
        </label>
      </div>
    )
  },
}
</script>

<style lang="scss" scoped>
// 按钮宽度
$button-width: 3.5rem;
// 按钮高度
$button-height: 1.77rem;
// 开关 直径
$toggle-diameter: 1.53rem;
// 按钮开关 偏移
$button-toggle-offset: ($button-height - $toggle-diameter) / 2;
// 开关 影子偏移
$toggle-shadow-offset: 0.06rem;
// 开关 长按时候宽度
$toggle-wider: 2rem;
// 开关 颜色
$toggle-color: #eeeeee;
// 浅灰色
$color-grey: var(--stitchColor);

.sky-switch {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 1rem;
  width: 100%;

  &::after {
    content: '🌚';
    position: absolute;
    left: $button-toggle-offset * 1;
    top: 50%;
    font-size: 1.4rem;
    transform: translateY(-50%);
  }

  &::before {
    content: '🌝';
    position: absolute;
    right: $button-toggle-offset * 1;
    top: 50%;
    font-size: 1.4rem;
    transform: translateY(-50%);
    z-index: 1;
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
      content: '';
      cursor: pointer;
      position: absolute;
      top: $button-toggle-offset;
      display: flex;
      justify-content: center;
      align-items: center;
      width: $toggle-diameter;
      height: $toggle-diameter;
      background-color: $toggle-color;
      transform: translateX($button-toggle-offset);
      transition: 0.3s all ease-in-out;
      box-shadow: $toggle-shadow-offset 0 ($toggle-shadow-offset) * 4 rgba(0, 0, 0, 0.1);
      border-radius: $toggle-diameter / 2;
      z-index: 1;
    }
  }
  input[type='checkbox'] {
    display: none;
    /* 如过按钮是开，背景颜色变色，加上移动动画，并且 影子在左边 */
    &:checked {
      & + div {
        &::after {
          transform: translateX($button-width - $toggle-diameter - $button-toggle-offset);
          box-shadow: ($toggle-shadow-offset) * (-1) 0 ($toggle-shadow-offset) * 4 rgba(0, 0, 0, 0.1);
        }
      }
    }
    &:hover {
      & + div {
        &::after {
          box-shadow: 0 0 0.5rem #ffffff;
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
