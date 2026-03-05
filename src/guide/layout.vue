<template>
    <div class="contents">

        <h2>Layout</h2>

        <section>
            <h4>Layout</h4>
            <p class="tit_wrap">
                <strong class="tit">Design</strong>
            </p>
            <div class="design_box">
                <div id="sample_wrap">
                    <div>
                        <em>&lt;wrap&gt;</em>

                        <!-- skip menu-->
                        <div>
                            <em>&lt;skip menu (본문/주메뉴)&gt;</em>
                        </div>

                        <!-- header -->
                        <div>
                            <em>&lt;Header /&gt;</em>
                        </div>
                        <!-- //header -->

                        <!-- content -->
                        <div>
                            <em>&lt;router-view /&gt;</em>
                        </div>
                        <!-- //content -->

                        <!-- footer -->
                        <div>
                            <em>&lt;Footer /&gt;</em>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <h4>Main_wrap</h4>
            <p class="tit_wrap">
                <strong class="tit">Design</strong>
            </p>
            <div class="design_box">
                <div id="sample_wrap">
                    <div id="container">
                        <em>&lt;id="container"&gt;</em>
                        <div>
                            <em>&lt;id="content_wrap"&gt;</em>
                            <div>
                                <em>&lt;router-view /&gt;</em>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <h4>Sub_wrap</h4>
            <p class="tit_wrap">
                <strong class="tit">Design</strong>
            </p>
            <div class="design_box">
                <div id="sample_wrap">
                    <div id="container">
                        <em>&lt;id="container"&gt;</em>
                        <div>
                            <em>&lt;BreadCrumb /&gt;</em>
                        </div>
                        <div>
                            <em>&lt;id="content_wrap"&gt;</em>
                            <div>
                                <em>&lt;router-view /&gt;</em>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>

<script>

export default {
    name: 'App',
    props: ["openModal"],
    components: {
    },
    data() {
            return {
            }
    },
    mounted() {
        $(document).ready(function () {
            /* 소스보기 */
            $('.tit_wrap a').click(function() {
                if ($(this).hasClass('active')) {
                    $(this).removeClass('active').parent().siblings('.code_box').slideUp();
                } else {
                    $(this).addClass('active').parent().siblings('.code_box').slideDown();
                }
            });
        });
    },
}
</script>

<style scoped>
#sample_wrap div {margin:20px; padding:20px; border:1px solid #ccc; position:relative;}
#sample_wrap em {padding:3px 6px; color:#fff; font-size:1.1rem; font-style:normal; background-color:#222; border-radius:4px; position:absolute; top:-12px; left:12px; display:inline-block;}
</style>
