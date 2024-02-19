class Setting {

    constructor(){
        if(Setting.instance  instanceof Setting)
        {
            return Setting.instance;
        }
        this.settingObject ={
            'background':'#ff0000',
            'version':Math.floor(Math.random()*4000)
        }
        // freezing the settingObject so no one can edit it
        Object.freeze(this.settingObject)
        // freezing the instance of the setting class , so no user can edit it 
        Object.freeze(this)
        // finally assigning the first instance of setting to Setting.instance 
        Setting.instance=this
        console.log('this')
        console.log(this)
    }

    get(key){
        return this.settingObject[key];
    }
}