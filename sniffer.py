from scapy.all import sniff,IP,IPv6,TCP,UDP,Raw

packet_count=0
ipv4_count=0
ipv6_count=0
tcp_count=0
udp_count=0

def analyze_packet(packet):
	global packet_count
	global ipv4_count
	global ipv6_count
	global tcp_count
	global udp_count
	
	packet_count+=1
	
	print(f"===================PACKET {packet_count} =========================")

	#check for ipv4
	if IP in packet:
		ip = packet[IP]
		ipv4_count += 1

		print(f"Source IP   : {ip.src}")
		print(f"Destination IP   : {ip.dst}")		

	#check for ipv6
	elif IPv6 in packet:
		ip = packet[IPv6]
		ipv6_count += 1

		print(f"Source IP   : {ip.src}")
		print(f"Destination IP   : {ip.dst}")

	else:
		print("No ip information")
		return

	#identify TCP
	if TCP in packet:
		tcp_count += 1
		print("Protocol  : TCP")
		print(f"Source Port : {packet[TCP].sport}")
		print(f"Destination Port : {packet[TCP].dport}")

	#identify UDP
	elif UDP in packet:
		udp_count += 1
		print("Protocol  : UDP")
		print(f"Source Port : {packet[UDP].sport}")
		print(f"Destination Port : {packet[UDP].dport}")

	else:
		print("Protocol  : other")

	#check for payload
	if Raw in packet:
		payload=bytes(packet[Raw].load)

		print(f"payload Size : {len(payload)} bytes")
		print(f"payload Preview : {payload[:50]!r}")
	else:
		print("Payload  : None")


print("=================================================================================================================================================================================")
print("BASIC PACKET SNIFFER")
print("=================================================================================================================================================================================")
print("Capturing 10 packets....")
print()


sniff(count=10,prn=analyze_packet)

print()
print("Capture complete")
print()
print("================CAPTURE SUMMERY============================")
print(f"Total Packets :{packet_count}")
print(f"IPv4 :{ipv4_count}")
print(f"IPv6 :{ipv6_count}")
print(f"TCP :{tcp_count}")
print(f"UDP :{udp_count}")
print("============================================================================================================================================================================")
		
	
