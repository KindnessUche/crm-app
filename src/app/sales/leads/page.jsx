import LeadDetails from "../../components/LeadDetails";
import LeadsWindow from "../../components/LeadsWindow";

export default function leadsPage() {
  return (
    <div className="p-2 relative">
      <LeadsWindow>
        <LeadDetails />
      </LeadsWindow>
    </div>
  );
}
