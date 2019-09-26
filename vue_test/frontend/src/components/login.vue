<template> 
    <div class="users">
         <h1>유저 목록</h1>
         <div class="container">
            <div class="outer">
                <div class="inner">
                    <div class="centered" v-for="user in users" :key="user.id">
                        
                        <div>
                                아이디 : {{user.id}}<br>
                                update_dt : {{user.update_dt}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
/* eslint-disable */ 
export default { 
    created() { 
        this.$http.get("/api/logins").then(response => { 
            this.users = response.data; 
        }); 
    }, 
    data() { 
        return { 
            users: [] 
        }; 
    } 
}; 
</script>
<style> 
.outer { 
    display: table; 
    width: 100%; 
    height: 100%; 
} 
.inner { 
    display: table-cell; 
    vertical-align: middle; 
    text-align: center; 
} 
.centered { 
    position: relative; 
    display: inline-block; 
    width: 50%; 
    padding: 1em; 
    font-size: 1.5em; 
    /* background: orange; */ 
    /* color: white; */ 
} 
.poster{ 
    width: 30%; 
    height: 40%; 
} 
</style>
