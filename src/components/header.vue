<template>
    <header class="header header--compressed">
        <div class="header-bar container-fluid">
            <span class="text-large text-muted text-bold half-margin-right">Digital Intelligence</span>
            <span class="text-bold text-large">{{ title }}</span>
            <span class="v-separator"></span>
            <div
                v-bind:class="{ 'active': zones.isActive }"
                v-on:click="zones.isActive = !zones.isActive"
                class="dropdown dropdown--center dropdown--tail">
                <a class="text-large text-default" href="javascript:;">{{zones.selected}}</a>
                <div class="dropdown__menu">
                    <!-- eslint-disable-next-line -->
                    <a v-for="(zone) in zones.options" v-bind:class="{ 'selected': zones.selected == zone.title }" v-on:click="zones.selected=zone.title">{{ zone.title }}</a>
                </div>
            </div>
            <div class="flex-fluid text-right">
                <span class="label label--circle label--medium label--ltgray">
                    <a>KB</a>
                </span>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'Header',
        data () {
            return {
                url: 'home',
                title: 'Home',
                zones: {},
                status: {
                    showMobileToolbar: false
                }
            }
        },
        watch : {
            $route () {
                var hash = window.location.hash;
                var path = hash.substring(hash.lastIndexOf('/')+1, hash.length);
                this.url = (path.length > 0) ? path : 'home';
                this.title = (path.length > 0) ? path.charAt(0).toUpperCase() + path.slice(1) : 'Home';
            }
        },
        methods: {
            onResize() {
                if (this.resizeTimeout) {
                    clearTimeout(this.resizeTimeout);
                }
                var self = this;
                this.resizeTimeout = setTimeout(function() {
                    self.status.showMobileToolbar = (window.innerWidth < 768) ? true : false;
                }, 250);
            }
        },
        mounted() {
            window.addEventListener('resize', this.onResize);
            this.onResize();
        },
        beforeDestroy() {
            window.removeEventListener('resize', this.onResize);
        },
        created () {
            axios.get("http://swtg-rtp-dev-7/di/json/zones.json")
            .then(response => {
                this.zones = response.data.zones;
            })
            .catch(e => {
                console.error(e);
            });
        }
    }
</script>
