<template>
<b-container style="padding:0 0 0 0;">
    <div class="form-group col-md-12 mt-4">
        <label class="mainfont" for="language">Language</label>
        <b-form-select v-model="language" :options="languages" class="mb-3 border" />
    </div>
    <div class="form-group col-md-12">
        <label class="mainfont" for="time">Time Zone</label>
        <b-form-select v-model="country" :options="countries" class="mb-3 border"  />
    </div>
    <div class="float-right mt-4">
        <button class="btn btn-1 btn-2 px-2">Save</button>
    </div>
</b-container>
</template>

<script>
export default {
    name: 'LanguageTab',
    data: function () {
        return {
            language: null,
            country: null,
            languages: [{
                    value: null,
                    text: '--select language--'
                },
                {
                    value: 'a',
                    text: 'English(UK)'
                },
                {
                    value: 'b',
                    text: 'Tamil'
                },
                {
                    value: 'C',
                    text: 'Hindi'
                },
                {
                    value: 'd',
                    text: 'Telugu'
                },
            ],
            countries: [{
                    value: null,
                    text: '--select country--'
                },
                {
                    value: '1',
                    text: 'Afghanistan(+04:30)'
                },
                {
                    value: '2',
                    text: 'Denmark(+01:00)'
                },
                {
                    value: '3',
                    text: 'France(+01:00)'
                },
                {
                    value: '4',
                    text: 'India(+05:30)'
                },
            ],
        }
    }
};
</script>

<style>
.border{
  border-radius:50px 50px 50px 50px;
}
</style>
