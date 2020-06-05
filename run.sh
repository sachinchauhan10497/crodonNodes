node cordon.js > nodes_to_cordon
while read line; do kubectl cordon $line ; done < nodes_to_cordon  