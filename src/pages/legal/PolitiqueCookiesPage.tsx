import LegalLayout from '@/components/UI/Legal/LegalLayout.tsx';
import LegalNote from '@/components/UI/Legal/LegalNote.tsx';

const PolitiqueCookiesPage = () => {
    return (
        <LegalLayout title="Politique de cookies" lastUpdated="20 juin 2026">
            <p>
                La présente politique explique l'usage des cookies et autres traceurs (notamment le
                stockage local du navigateur) sur le site Rekap (https://rekap.tech), conformément
                aux recommandations de la CNIL et à l'article 82 de la loi « Informatique et
                Libertés ».
            </p>

            <h2>1. Qu'est-ce qu'un traceur ?</h2>
            <p>
                Un cookie est un petit fichier déposé sur votre terminal lors de la visite d'un
                site. Le « stockage local » (<em>localStorage</em>) est une technologie similaire
                permettant de conserver des informations dans votre navigateur. Ces deux mécanismes
                sont collectivement désignés ici par le terme « traceurs ».
            </p>

            <h2>2. Traceurs utilisés par Rekap</h2>
            <p>
                À ce jour, Rekap n'utilise que des traceurs strictement nécessaires au bon
                fonctionnement du site. Ils sont stockés localement dans votre navigateur et ne sont
                pas transmis à des tiers à des fins publicitaires.
            </p>
            <table>
                <thead>
                    <tr>
                        <th>Traceur</th>
                        <th>Type</th>
                        <th>Finalité</th>
                        <th>Durée</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Préférence de thème (clair/sombre)</td>
                        <td>localStorage</td>
                        <td>Mémoriser l'affichage choisi par l'utilisateur</td>
                        <td>Persistant jusqu'à effacement</td>
                    </tr>
                    <tr>
                        <td>Préférence de langue (FR/EN)</td>
                        <td>localStorage</td>
                        <td>Mémoriser la langue d'affichage choisie</td>
                        <td>Persistant jusqu'à effacement</td>
                    </tr>
                    <tr>
                        <td>Jeton de session / authentification</td>
                        <td>localStorage</td>
                        <td>Maintenir votre connexion à votre espace (le cas échéant)</td>
                        <td>Durée de la session</td>
                    </tr>
                </tbody>
            </table>

            <LegalNote>
                Ces traceurs relèvent de la catégorie des traceurs « strictement nécessaires » à la
                fourniture d'un service expressément demandé par l'utilisateur. À ce titre, ils sont
                exemptés du recueil préalable de consentement (art. 82 de la loi Informatique et
                Libertés ; lignes directrices de la CNIL).
            </LegalNote>

            <h2>3. Absence de traceurs de mesure d'audience et publicitaires</h2>
            <p>
                Rekap n'utilise actuellement aucun cookie de mesure d'audience (analytics) ni aucun
                cookie publicitaire ou de réseaux sociaux. Si de tels traceurs venaient à être
                ajoutés, un bandeau de recueil du consentement serait mis en place et la présente
                politique serait mise à jour en conséquence.
            </p>

            <h2>4. Gérer les traceurs</h2>
            <p>
                Vous pouvez à tout moment supprimer les traceurs stockés via les réglages de votre
                navigateur (effacement des données de navigation / du stockage local). La
                suppression des traceurs nécessaires peut toutefois dégrader votre expérience (perte
                des préférences de thème et de langue, déconnexion).
            </p>

            <h2>5. Contact</h2>
            <p>
                Pour toute question relative aux traceurs, vous pouvez nous écrire à{' '}
                privacy@rekap.tech. Voir aussi notre{' '}
                <a href="/politique-de-confidentialite">Politique de confidentialité</a>.
            </p>
        </LegalLayout>
    );
};

export default PolitiqueCookiesPage;
