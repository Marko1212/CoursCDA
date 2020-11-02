<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="AFFICHERCALCUL PrixHT*(100 + TVA)/100"/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2etat="inactif" F2para="" F2defaut="" F2lignes=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param epaisseurPoint="2" arrondiAuto="vrai" totalAffichages="1000" maxBoucle="500000" epaisseurLigne="2" nbDecimales="8" totalBoucles="5000000"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#PrixHT" algoitem="PrixHT EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#TVA" algoitem="TVA EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="2#PrixHT#pasliste" algoitem="LIRE PrixHT"/>
        <item code="2#TVA#pasliste" algoitem="LIRE TVA"/>
        <item code="4#Le prix TTC est #0" algoitem="AFFICHER &quot;Le prix TTC est &quot;"/>
        <item code="20#PrixHT*(100 + TVA)/100#0" algoitem="AFFICHERCALCUL PrixHT*(100 + TVA)/100"/>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
