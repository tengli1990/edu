<template>
  <div class="center-page">
    <div class="resume-page">
      <table class="table-box">
        <tbody class="first-module">
          <tr>
            <td>1</td>
            <td class="head-portrait" rowspan="5">4</td>
          </tr>
          <tr>
            <td>2</td>
          </tr>
          <tr>
            <td>3</td>
          </tr>
          <tr>
            <td>4</td>
          </tr>
          <tr>
            <td>4</td>
          </tr>
        </tbody>

        <tbody>
          <tr>
            <td>1</td>
            <td>2</td>
          </tr>
          <tr>
            <td colspan="2">
              111
            </td>
          </tr>
          <tr>
            <td colspan="2">
              111
            </td>
          </tr>
          <tr>
            <td colspan="2">
              111
            </td>
          </tr>
          <tr>
            <td colspan="2">
              111
            </td>
          </tr>
        </tbody>

        <tr>
          <td colspan="2">个人简介</td>
        </tr>
        <tr>
          <td colspan="2">备注</td>
        </tr>

        <tr>
          <td colspan="2">以上各项由参考人填写</td>
        </tr>

        <tr>
          <td colspan="2">审核意见</td>
        </tr>

        <tr>
          <td colspan="2">报名编号</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.resume-page {
  width: 880px;
  margin: 0 auto;
  background: #fff;
  padding: 30px;
  min-height: 500px;
}

.table-box,
.table-box tr td {
  border: 1px solid #333;
  line-height: 40px;
}

.table-box {
  width: 100%;
  text-align: center;
  border-collapse: collapse;
}

.first-module {
  width: 100%;
}
.head-portrait {
  width: 180px;
}
</style>
