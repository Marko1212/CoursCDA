<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="FIN_POUR" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2defaut="" F2lignes="" F2etat="inactif" F2para=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param epaisseurLigne="2" nbDecimales="8" epaisseurPoint="2" totalBoucles="5000000" arrondiAuto="vrai" maxBoucle="500000" totalAffichages="1000"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="SERIE EST_DU_TYPE LISTE" code="1#LISTE#SERIE"/>
        <item algoitem="I EST_DU_TYPE NOMBRE" code="1#NOMBRE#I"/>
        <item algoitem="J EST_DU_TYPE NOMBRE" code="1#NOMBRE#J"/>
        <item algoitem="N EST_DU_TYPE NOMBRE" code="1#NOMBRE#N"/>
        <item algoitem="TEMP EST_DU_TYPE NOMBRE" code="1#NOMBRE#TEMP"/>
        <item algoitem="INDICE_MINI EST_DU_TYPE NOMBRE" code="1#NOMBRE#INDICE_MINI"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="AFFICHER &quot;ENTREZ LE NOMBRE DES ELEMENTS A TRIER&quot;" code="4#ENTREZ LE NOMBRE DES ELEMENTS A TRIER#0"/>
        <item algoitem="LIRE N" code="2#N#pasliste"/>
        <item algoitem="AFFICHER &quot;ENTREZ LES NOMBRES&quot;" code="4#ENTREZ LES NOMBRES#0"/>
        <item algoitem="POUR I ALLANT_DE 1 A N" code="12#I#1#N">
            <item algoitem="DEBUT_POUR" code="13#debutpour"/>
            <item algoitem="LIRE SERIE[I]" code="2#SERIE#I"/>
            <item algoitem="FIN_POUR" code="14#finpour"/>
        </item>
        <item algoitem="POUR I ALLANT_DE 1 A N" code="12#I#1#N">
            <item algoitem="DEBUT_POUR" code="13#debutpour"/>
            <item algoitem="INDICE_MINI PREND_LA_VALEUR I" code="5#INDICE_MINI#I#pasliste"/>
            <item algoitem="POUR J ALLANT_DE I + 1 A N" code="12#J#I + 1#N">
                <item algoitem="DEBUT_POUR" code="13#debutpour"/>
                <item algoitem="SI (SERIE[J] &lt; SERIE[INDICE_MINI]) ALORS" code="6#SERIE[J] &lt; SERIE[INDICE_MINI]">
                    <item algoitem="DEBUT_SI" code="7#debutsi"/>
                    <item algoitem="INDICE_MINI PREND_LA_VALEUR J" code="5#INDICE_MINI#J#pasliste"/>
                    <item algoitem="FIN_SI" code="8#finsi"/>
                </item>
                <item algoitem="FIN_POUR" code="14#finpour"/>
            </item>
            <item algoitem="TEMP PREND_LA_VALEUR SERIE[INDICE_MINI]" code="5#TEMP#SERIE[INDICE_MINI]#pasliste"/>
            <item algoitem="SERIE[INDICE_MINI] PREND_LA_VALEUR SERIE[I]" code="5#SERIE#SERIE[I]#INDICE_MINI"/>
            <item algoitem="SERIE[I] PREND_LA_VALEUR TEMP" code="5#SERIE#TEMP#I"/>
            <item algoitem="FIN_POUR" code="14#finpour"/>
        </item>
        <item algoitem="AFFICHER &quot;La liste des nombres triée dans l'ordre croissant est :&quot;" code="4#La liste des nombres triée dans l'ordre croissant est :#1"/>
        <item algoitem="POUR I ALLANT_DE 1 A N" code="12#I#1#N">
            <item algoitem="DEBUT_POUR" code="13#debutpour"/>
            <item algoitem="AFFICHER SERIE[I]" code="3#SERIE#1#I"/>
            <item algoitem="FIN_POUR" code="14#finpour"/>
        </item>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
