import { useTranslation } from "react-i18next";
import { usePlayerStore } from "@/state/playerStore";

export default function PlayerStatus() {
  const { t } = useTranslation();
  const { name, level, xp, currentZone, knownSpells } = usePlayerStore();

  return (
    <div className="bg-gray-800 rounded-xl p-4 mb-6 shadow-lg text-white">
      <h3 className="text-xl font-bold mb-2">🧙 {t("playerStatus")}</h3>
      <ul className="space-y-1 text-sm">
        <li>
          <strong>{t("name")}:</strong> {name}
        </li>
        <li>
          <strong>{t("level")}:</strong> {level}
        </li>
        <li>
          <strong>{t("xp")}:</strong> {xp}
        </li>
        <li>
          <strong>{t("zone")}:</strong> {currentZone}
        </li>
        <li>
          <strong>{t("spells")}:</strong> {knownSpells.length}
        </li>
      </ul>
    </div>
  );
}
