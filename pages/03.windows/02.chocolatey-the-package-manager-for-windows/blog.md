---
title: 'Chocolatey - The package manager for Windows'
media_order: 'chocolatey.jpg,chocolatey2.jpg'
featured_image: chocolatey2.jpg
intro: 'Chocolatey NuGet is a Machine Package Manager, somewhat like apt-get, but built with Windows in mind. It is built on top of NuGet command line and the NuGet infrastructure. In terms of updates, it allows you to update nearly everything on your machine with a few simple keystrokes.'
published: true
publish_date: '17-10-2018 09:20'
taxonomy:
    tag:
        - php
        - CentOS
visible: true
template: item
---

[TOC]

---

**Mettre à jour/Installer les application sur Windows**, ça demande pas mal de temps, pour installer par exemple **Adobe Acrobat DC**, il est nécessaire de se rendre sur le site Officiel de l’éditeur du logiciel, télécharger **l’exe, lancer** l’installation, **cocher** ou **décocher** d’éventuels options (afin d’éviter les spywares), cliquer **Suivant**, **Suivant** ; **Suivant**, **Accepter le contrat**, et cliquer sur **terminer**.

Ensuite imaginons que nous mettions à jour **7-zip**, pareil il faut se rendre sur le site de l’éditeur du logiciel, choisir la version qui convient (32 ou 64 bits, version de Windows), autant dire que lorsqu’on est amené à souvent faire des installations de poste avec l’installation de plein de logiciels, ça peut être barbant d’effectuer toutes ces étapes.

Il existe une solution à toute cette galère ! **Chocolatey !**

Il s’agit d’un **gestionnaire de paquets**, il permet d’installer, désinstaller et mettre à jour des logiciels en ligne de commande. Pour les connaisseurs de Linux la même fonctionnalité existe déjà, il s’agit de **APT/YUM**.

Quels sont les avantages ?

* Les logiciels (paquets) sont centralisés dans un seul et même serveur (dépôt), plus besoin de se rendre sur chacun des site officiel éditeur du logiciel que l’on souhaite installer, tous sont au même endroit, il va être possible d’installer, désinstaller et mettre à jour plusieurs logiciels avec une seul commande,
* Les logiciels sont dénués de spywares & malwares : les cases qui permettent d’installer des logiciels tiers/non désirés ne sont plus présent,
* Les dépendances sont détectées et automatiquement installées, si par exemple en installant un package celui-ci requiert Microsoft .NET Framework 3.5, il sera automatiquement installé.



## 1. Installation de Chocolatey

Il est très rapide d’installer Chocolatey, il suffit d’ouvrir une invite de commande en admin et d’exécuter la ligne suivante :

```
@"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"
```

Encore plus simple, j’ai mis en place un script qui permet d’installer automatiquement en mode admin Chocolatey : Install_Chocolatey.cmd :
```
@echo off
echo Installing Chocolatey...
if not "%1"=="am_admin" call powershell -h | %WINDIR%\System32\find.exe /i "powershell" > nul && if not "%1"=="am_admin" (powershell start -verb runas '%0' am_admin > nul & exit)

@powershell -NoProfile -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"
pause
```



## 2. Installation de Paquets (Logiciels) depuis Chocolatey

Une fois Chocolatey installé, il est désormais possible d’installer n’importe quel paquet présent dans le catalogue https://chocolatey.org/packages :


![](https://i.postimg.cc/Sx5RYJx6/chocolatey.png)


Il suffit de chercher dans le catalogue de **Chocolatey**, chercher le ou les paquets qui nous intéresse, si par exemple, on souhaite installer **7zip + chrome + flashplayer (plugin+activex+ppapi) + vlc + adobe reader** une commande suffira, la voici :


```
choco install 7zip.install googlechrome flashplayerplugin flashplayeractivex flashplayerppapi vlc adobereader -y
```


Encore mieux, mettre à jour tous les paquets installés en une seule commande ! :


```
choco upgrade all -y
```



## 3. Mettre à jour des Paquets (logiciels) via Chocolatey

Lorsque des paquets sont installés via Chocolatey, il est possible de les mettre à jour également en ligne de commande, pour mettre à jour un seul paquet voici la commande : ```choco upgrade vlc -y```
Encore mieux, mettre à jour tous les paquets installés en une seule commande ! :
```choco upgrade all -y```



## 4. Désinstaller des Paquets via Chocolatey

Pour désinstaller un logiciel, c’est tout aussi simple : ```choco uninstall firefox``` Validez en entrant Y ou bien en tapant la même commande en ajoutant la variable ```-y``` directement : ```choco uninstall firefox -y``` , puis appuyez sur Entrée.

De la même facon, il est possible de désinstaller plusieurs paquets en une seule fois :
```choco uninstall firefox 7zip vlc -y```