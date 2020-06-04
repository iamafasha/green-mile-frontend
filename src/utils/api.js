export const signInUser = async (email,password) => {
    const response = await fetch(
      `https://my-json-server.typicode.com/afashaisakiye/api/users/`,
    );
    const users = await response.json();
    const user=users.filter((user)=>user.email==email)[0];
    if(!user){
        return false;
    }
    const user_id=user.id;
    const password_response = await fetch(`https://my-json-server.typicode.com/afashaisakiye/api/auth/${user_id}`);
    const password_json = await password_response.json();
    if(password_json.pass!=password){
        return false;
    }

    return {
        "id":password_json.id,
        'auth_token':password_json.auth_token,
        'logged_in':true,
        'account_type':user.accountType
    };
};


export const getListsForUser = async(user_type)=>{
    const response = await fetch(
        `https://my-json-server.typicode.com/afashaisakiye/gmd_package_api/package_status`,
    );
    const lists = await response.json();
    return lists.filter((list)=>list.access_level.includes(user_type))
};

export const getPackagesTypes =async()=>{
    const response = await fetch(
        `https://my-json-server.typicode.com/afashaisakiye/gmd_package_api/package_types`,
    );
    return  (await response.json());
    
}

export const getPackages=async(user_auth_token)=>{
    const response = await fetch(
        `https://my-json-server.typicode.com/afashaisakiye/gmd_package_api/packages`,
    );
    return  (await response.json());
    
}

