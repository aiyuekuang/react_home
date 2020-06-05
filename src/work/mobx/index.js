import {action, computed, observable} from 'mobx';

class userStoreClass {
    @observable user = {
        userInfo: {},
        role: [],
        routes: []
    };

    @observable count1 = 0;

    count = 0;

    @computed get userName() {
        return this.user.name;
    }

    @action add() {
        this.count1 ++
    }

    @action jian() {
        this.count1 --
    }

    @action changeUser() {
        if (this.count % 2 === 1) {
            this.user = {
                name: 'admin',
                role: '管理员'
            };
        } else {
            this.user.name = 'guest';
            this.user.role = '访客';
            this.user.isGuest = 'true';
        }
        this.count++;
    }
}

const userStore = new userStoreClass();
export default userStore;
