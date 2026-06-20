import LegalLayout from '@/components/UI/Legal/LegalLayout.tsx';

const MentionsLegalesPage = () => {
    return (
        <LegalLayout title="Mentions légales" lastUpdated="20 juin 2026">
            <p>
                Conformément aux dispositions de l'article 6-III de la loi n° 2004-575 du 21 juin
                2004 pour la confiance dans l'économie numérique (LCEN), il est porté à la
                connaissance des utilisateurs du site Rekap les présentes mentions légales.
            </p>

            <h2>1. Éditeur du site</h2>
            <p>Le site Rekap (https://rekap.tech) est édité par :</p>
            <ul>
                <li>
                    <strong>Dénomination :</strong> [Company-name]
                </li>
                <li>
                    <strong>Forme juridique :</strong> Micro-entreprise
                </li>
                <li>
                    <strong>Capital social :</strong> 0€
                </li>
                <li>
                    <strong>Siège social :</strong> [Address]
                </li>
                <li>
                    <strong>SIRET :</strong> [Siret]
                </li>
                <li>
                    <strong>RCS :</strong> [Rcs]
                </li>
                <li>
                    <strong>N° de TVA intracommunautaire :</strong> [Vat-number]
                </li>
                <li>
                    <strong>Adresse e-mail :</strong> support@rekap.tech
                </li>
            </ul>

            <h2>2. Directeur de la publication</h2>
            <p>
                Le directeur de la publication du site est [Publication-director], en sa qualité de
                représentant légal de l'éditeur.
            </p>

            <h2>3. Hébergeur</h2>
            <p>Le site est hébergé par :</p>
            <ul>
                <li>
                    <strong>Hébergeur :</strong> OVH SAS
                </li>
                <li>
                    <strong>Adresse :</strong> 2 rue Kellermann, 59100 Roubaix (France)
                </li>
                <li>
                    <strong>Contact :</strong> +33 9 72 10 10 07
                </li>
            </ul>

            <h2>4. Propriété intellectuelle</h2>
            <p>
                L'ensemble des éléments composant le site Rekap (structure, textes, logos, marque «
                Rekap », graphismes, illustrations, code source, ainsi que l'organisation et la
                présentation des contenus) est protégé par le droit de la propriété intellectuelle
                et demeure la propriété exclusive de l'éditeur ou de ses partenaires.
            </p>
            <p>
                Toute reproduction, représentation, modification, publication ou adaptation, totale
                ou partielle, de l'un quelconque de ces éléments, par quelque procédé que ce soit et
                sur quelque support que ce soit, est interdite sans l'autorisation écrite préalable
                de l'éditeur. Toute exploitation non autorisée du site ou de l'un de ses éléments
                est susceptible d'engager la responsabilité de son auteur.
            </p>
            <p>
                Les marques, logos et noms de produits tiers cités sur le site (notamment Asana,
                ClickUp, monday.com) demeurent la propriété de leurs titulaires respectifs et ne
                sont mentionnés qu'à des fins d'interopérabilité et d'information.
            </p>

            <h2>5. Responsabilité</h2>
            <p>
                L'éditeur s'efforce d'assurer l'exactitude et la mise à jour des informations
                diffusées sur le site, mais ne saurait garantir l'exhaustivité ou l'absence
                d'erreur. L'éditeur ne saurait être tenu responsable des dommages directs ou
                indirects résultant de l'accès ou de l'utilisation du site, y compris
                l'inaccessibilité, les pertes de données ou la présence de virus.
            </p>

            <h2>6. Données personnelles et cookies</h2>
            <p>
                Les modalités de collecte et de traitement des données personnelles sont détaillées
                dans la <a href="/politique-de-confidentialite">Politique de confidentialité</a> et
                la <a href="/politique-cookies">Politique de cookies</a>.
            </p>

            <h2>7. Contact</h2>
            <p>
                Pour toute question relative au site ou aux présentes mentions légales, vous pouvez
                écrire à : support@rekap.tech .
            </p>
        </LegalLayout>
    );
};

export default MentionsLegalesPage;
