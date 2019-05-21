<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="19">
        <div class="grid-content bg-purple">
            <div class="team1">
                <div class="team1-1 margin-t-50">
                    <div class="text-align-c">
                      <p class="t-f-24 hsff-7124">服务团队</p>
                      <p class="hs-666">Service Team</p>
                      <div class="disp-block">
                        <img src="../../../../static/images/index-bg.png" alt="">
                      </div>
                    </div>
                    <div class="team1-2 margin-t-50 clearfix">
                        <div class="fl width-50">
                          <img src="../../../../static/images/one-zz1brand_01.jpg" alt="">
                        </div>
                        <div class="fr width-50">
                            <div>
                              <span class="t-f-20">家政团队</span>
                              <span class="hs-666 margin-l-20"> Housekeeping team</span>
                            </div>
                            <div class="margin-t-30 t-f-20">
                              <p>e家政家政团队由保洁师和家居工程技师组成，现拥有3000+人员。业务范围已覆盖全国60+座城市。“不求海量的用户，只求服务好每一位客户”是e家政秉承的服务宗旨。</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="team1-2">
                    <div>
                        <span class="t-f-22">母婴团队</span>
                        <span class="hs-666 margin-l-10"> Maternal and infant services item</span>
                    </div>
                    <div class="margin-t-20">
                        <div class="fl width-50 t-f-20">
                            <p>e家政母婴团队包由月嫂、育儿嫂、催乳师、产后康复师、小儿推拿师组成。现有员工制月嫂300余人，月服务单量超过6000单。所有服务人员定期参加e家政职业技术学校的培训，不断提高自己的专业水平和服务意识，以保证e家政的服务质量成为行业标杆。</p>
                        </div>
                        <div class="width-50 fr">
                          <img src="../../../../static/images/one-zzbrand_02.jpg" alt="">
                        </div>
                    </div>
                </div>
            </div>
          <div class="team1 margin-t-50">
            <div class="team1-1 margin-t-50">
              <div class="team1-2 margin-t-50 clearfix">
                <div class="fl width-50">
                  <img src="../../../../static/images/one-zzbrand_03.jpg" alt="">
                </div>
                <div class="fr width-50">
                  <div>
                    <span class="t-f-20">家政团队</span>
                    <span class="hs-666 margin-l-20"> Housekeeping team</span>
                  </div>
                  <div class="margin-t-30 t-f-20">
                    <p>e家政家政团队由保洁师和家居工程技师组成，现拥有3000+人员。业务范围已覆盖全国60+座城市。“不求海量的用户，只求服务好每一位客户”是e家政秉承的服务宗旨。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="5">
        <div class="grid-content bg-purple enterprise-2">
          <Rightsidebar/>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Rightsidebar from './Rightsidebar/Rightsidebar.vue'
export default {
  components: {
    Rightsidebar
  }
}
</script>
<style>
  .width-50{
    width: 45%;
  }
  .team1-2 img{
    width: 100%;
    height: 350px;
  }
  .team1-2 {
    height: 400px;
  }
</style>
