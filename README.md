# GIF search web service

## Installation steps

#### Environment dependencies
Install node on Ubuntu server (Assumption: Ubuntu 16.04.1 x64 distribution):
```sh
# Node.js v7 installation on Digital Ocean droplet
curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -
sudo apt-get install -y nodejs
```

Set environment variables:
```sh
# open the following file
nano ~/.bashrc
# add the following lines of code to set environment variables
export GIPHY_KEY=<insertKey>
export PORT='8080'
# force session to read file
source ~/.bashrc
```

#### Clone project
Clone repo from github:
```sh
# run git clone
git clone https://github.com/juliusbuckley/clara-challenge-backend.git
```

#### Project dependencies

Install project dependencies and transpile server folder:
```sh
# run install script
# script is checking for existence of babel-cli global install at /usr/bin/babel (please update if usr/bin is different)
./install.sh
```

## Running the Application

#### Local development

Install nodemon for dev environment or update npm dev:start script to use node:
```sh
# install nodemon globally 
npm install -g nodemon
```

Start server and transpile with babel-cli:
```sh
# run dev start script
npm run dev:start
```
#### Production

Start server: 
```sh
# run prod start script
./start.sh
```
## Extra Optimizations

#### Enable screen  

Use multiple terminal sessions within one window:
```sh
# start a new screen
screen
# detach screen
Ctrl-a d
# list screens
screen –ls
# reattach screen
screen -r idNumber
```

#### Enable port forwarding

Change the app to listen on port 8080:
```sh
# run the following command to see if port forwarding is enabled
cat /proc/sys/net/ipv4/ip_forward
# if previous command returns 0 access the following file
sudo vim /etc/sysctl.conf
# uncomment the following line
net.ipv4.ip_forward
# enable changes
sudo sysctl -p /etc/sysctl.conf
# the following command should now return 1
cat /proc/sys/net/ipv4/ip_forward
# set up forwarding to 8080
sudo iptables -A PREROUTING -t nat -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 8080
sudo iptables -A INPUT -p tcp -m tcp --sport 80 -j ACCEPT
sudo iptables -A OUTPUT -p tcp -m tcp --dport 80 -j ACCEPT
```

#### Use

- HTTP GET API with the path `/search/[search term]`
- Always returns exactly 5 results or 0 results if there are less than 5 available
- Responses are in JSON in the following format:
```json
{
  "data": [
    {
      "gif_id": "FiGiRei2ICzzG",
      "url": "http://giphy.com/gifs/funny-cat-FiGiRei2ICzzG",
    }
  ]
}
```
