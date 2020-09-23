# demo-mongo
mongodb demo git repo

## Installation (Ubuntu 20.04 Focal)
Reference: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/
1. import public key used by the package management system
    ```
    wget -qO - https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add -
    ```
2. create a list file for MongoDB
    ```
    Create the /etc/apt/sources.list.d/mongodb-org-4.4.list file for Ubuntu 20.04 (Focal):
    ```
3.  execute:
    ```
    echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/4.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list
    ```
4. install
    ```
    sudo apt-get update
    sudo apt-get install -y mongodb-org
    ```
5. set auto launch when system reboot:
    ```
    sudo systemctl enable mongod
    ```

## Start MongoDB
```
sudo systemctl start mongod
```

## Check status of MongoDB
```
sudo systemctl status mongod
```

## Stop MongoDB
```
sudo systemctl stop mongod
```

## MongoShell
```
mongo
```

## MongoShell API reference
```
https://docs.mongodb.com/manual/reference/mongo-shell/
```

## mongoDB Node.js driver
```
npm install mongodb --save
```