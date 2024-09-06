"use client"
import { useSearchParams } from "next/navigation";
import { Units } from "../../units";
import { Factions } from "@/app/factions";


function StartOfRoundPage() {
  
  const params = useSearchParams();
  const selectedFaction = params.get('faction');
  const faction = Factions.factions.find(faction => faction.id === selectedFaction);

  const initialBattleTrait = params.get('battleTraits');
  const battleTraits = faction?.battleTraits || [];
  const selectedBattleTrait = battleTraits.find(trait => trait.id === initialBattleTrait);
  let showBattleTrait = false;
  if (selectedBattleTrait?.phase === "Start") {
    showBattleTrait = true;
  }

  const initialRegimentAbility = params.get('regimentAbilities');
  const regimentAbilities = faction?.regimentAbilities || [];
  const selectedRegimentAbility = regimentAbilities.find(ability => ability.id === initialRegimentAbility);
  let showRegimentAbility = false;
  if (selectedRegimentAbility?.phase === "Start") {
    showRegimentAbility = true;
  }

  const initialEnchancment = params.get('enhancements');
  const enchancments = faction?.enchancements || [];
  const selectedEnchancment = enchancments.find(enchancment => enchancment.id === initialEnchancment);
  let showEnchancment = false;
  if (selectedEnchancment?.phase === "Start") {
    showEnchancment = true;
  }

  const factionUnits = Units.factions.find(faction => faction.id === selectedFaction);
  const units = factionUnits?.units || [];

  return (



    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">


      
      {/* Left side - Static Information */}
      <div className="md:w-1/2 p-6 bg-white">
        <h1 className="text-3xl font-bold mb-4">Passive Abilities</h1>
        <p className="mb-4">All passive abilities for the faction:</p>
        <ul className="list-disc list-inside space-y-2">
          {/* {categories.map((cat) => (
            <li key={cat} className="text-gray-700">{cat}</li>
          ))} */}
        </ul>
       {showBattleTrait && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-2">Battle Traits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Name: {selectedBattleTrait?.name}</li>
            <li>Effect: {selectedBattleTrait?.effect}</li>
            <li>Phase: {selectedBattleTrait?.phase}</li>
            <li>{selectedBattleTrait?.once ? "Once Per Battle" : ""}</li>
          </ul>
        </div>
       )}
       {showRegimentAbility && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-2">Regiment Abilities</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Name: {selectedRegimentAbility?.name}</li>
            <li>Effect: {selectedRegimentAbility?.effect}</li>
            <li>Phase: {selectedRegimentAbility?.phase}</li>
            <li>{selectedRegimentAbility?.once ? "Once Per Battle" : ""}</li>
          </ul>
        </div>
        )}
        {showEnchancment && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-2">Enchancments</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Name: {selectedEnchancment?.name}</li>
            <li>Effect: {selectedEnchancment?.effect}</li>
            <li>Phase: {selectedEnchancment?.phase}</li>
            <li>{selectedEnchancment?.once ? "Once Per Battle" : ""}</li>
          </ul>
        </div>
      )}
      </div>
    </div>
  );
}

export default StartOfRoundPage;