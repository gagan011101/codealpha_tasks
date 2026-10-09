###### Basic Network Sniffer



This is a simple python network sniffer made using Scapy.



I build this project to understand how network packets work and information such as IP addresses,ports,protocols and payload can be seen from captured packets



###### 

###### What it does :



* Captures live network packets
* Display source and destination IP addresses
* Supports IPv4 and IPv6 
* Detects TCP and UDP protocols 
* Display source and destination ports
* Show payload size and a limited payload preview 
* Count capture packets
* Display captured packets
* Display IPv4,IPv6,TCP and UDP statistics



###### Requirements :



1. Python 3
2. Scapy
3. Windows Command Prompt



###### 

###### How to run :



First create and activate a virtual environment :



Commands

1. python -m venv venv
2. venv\\Scripts\\activate 



###### 

###### Install Scapy :



pip install -r requirements.txt





###### Run the program :



python sniffer.py



The program captures 10 packets and displays their details in the terminal.





###### Example :



=========PACKET 1 ============



Source IP : 10.102.40.31

Destination IP : 10.102.40.216

Protocol : UDP

Source Port : 51280

Destination Port : 53

Payload : None





###### What I learned :



* IP addresses
* IPv4 and IPv6
* TCP and UDP
* Network ports
* Packet payloads
* Basic packet  analysis
* How data moves through a network





###### Important :



This project should only be used on networks or devices that you own or have permission to monitor.





###### Future improvements :



* Packet filtering
* Timestamps
* Saving packet information to a file 
* More protocol analysis
* A simple graphical interface

###### &#x20;







