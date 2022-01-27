<template>
<div class="slide">
  <div class="slide__wrapper">
     <Progress />
  <user />
  <div class="slide-content">
    <slidecontent />
  </div>

  <Button />

</div>
</div>
</template>

<script>
import { slidecontent } from '../../components/slidecontent'
import { button as Button } from '../../components/button'
import { progress as Progress } from '../../components/progress'
import { user } from '../../components/user'

export default {
  components: {
    user,
    slidecontent,
    Button,
    Progress

  }
}
</script>

<style src="./slide.scss" lang="scss" ></style>
