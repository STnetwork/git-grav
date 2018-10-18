---
title: 'Install DHCP Rôle on Windows Server 2016'
media_order: Windows_Server_2016_DHCP.jpg
featured_image: Windows_Server_2016_DHCP.jpg
intro: '**DHCP** is an Internet Engineering Task Force (IETF) standard that is designed to reduce the administrative burden and complexity of configuring hosts on a TCP/IP-based network, such as a private intranet. By using the DHCP Server service, the process of configuring TCP/IP on DHCP clients is automatic.'
published: true
publish_date: '11-10-2018 13:37'
taxonomy:
    tag:
        - php
        - CentOS
visible: true
template: item
---

[TOC]

---
## Install DHCP 

We must to go in **"Control Panel\All Control Panel Items\Network and Sharing Center"** and click on **Ethernet0** Connection :

![](Network1.png)

---
Then click on **Properties** :

![](Network2.png)

---
Come down in **IPv4 option** and click **Properties** again  :

![](Network3.png)

---
We already have a Static IP set up on this particular server, because that's the one our Network Administrator told us to use. When you go to set the Static IP for a DHCP server, it's important to talk with the Network Administrator first and find out what they would have we use inside our particular Network Environment.

 Now go to setup the **DHCP Server**, in the Dashboard of the **"Server Manager"** click on **"Add Roles & Features"** :

![](01-Server-Manager.png)

---
 This will bring up the **"Add Roles & Features Wizard"**, click **"Next"** on this :

![](DHCP1.png)

---
 In our case, we're doing **"Rolls and Features"** and click **"Next"** :

![](DHCP3.png)

---
 In this screen, if there are more than one computer available on the network to do this, then more than one server would be shown here, as it is, we only have the one server set up on this Network click **"Next"** :

![](DHCP3-1.png)

---
 Click on the role **"DHCP Server"**, a new window appears, just click **"Add Features"** and click **"Next"** :

![](DHCP4.png)
![](DHCP5.png)
![](DHCP6.png)

---
 Click **"Next"** by doing nothing :

![](DHCP7.png)

---
 Click **"Next"** by doing nothing :

![](DHCP8.png)

---
 Click **"Install"** :

![](DHCP9.png)
![](DHCP10.png)

---
 Click on **"Complete DHCP Configuration"** :

![](DHCP10-1.png)

---
 A new Window appears,for complete the configuration of DHCP , click on **"Commit"** :

![](DHCP11.png)

---
 And **"Close"** :

![](DHCP12.png)

---
---

## Creation of Scoop DHCP 

 Creation of Scoop by going in Tools option, and picking our **DHCP Management Tool** :

![](DHCP14.png)

---
 We choose the server we want to use, then choose **IPv4** :

![](DHCP14-1.png)

---
 Click on **"Action"** and **"New Scope Wizard"** :

![](DHCP15.png)

---
 Click on **"Next"** :

![](DHCP16.png)

---
 We have to choose a name for our Scope and then click **"Next"** :

![](DHCP17.png)

---
 We have to put **"Start IP address"** & **"End IP address"** with subnet mask :

![](DHCP18.png)

---
 Now, we can put any IP addresses or IP ranges that we want to exclude :

![](DHCP19.png)

---
 Now we have the option of setting up the duration of our lease, the default duration is 8 days :

![](DHCP20.png)

---
 Click **"Next"** :

![](DHCP21.png)

---
 Then we have the option of entering a **Default Gateway** :

![](DHCP22.png)

---
 Now if we want to make our **DHCP Server** as part of a Domain or something, we would enter that information as well, since we don't have a domain to enter, we can click **"Next"** :

![](DHCP23.png)

---
 We also have the option of setting up a **WINS Server**, click **"Next"** :

![](DHCP24.png)

---
 And then click **"Next"** to activate it :

![](DHCP25.png)

---
 And **"Finish"** :

![](DHCP26.png)

---