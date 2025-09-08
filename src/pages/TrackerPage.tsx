// import { useState } from "react";
import { Button, Stack, Title, Divider } from "@mantine/core";
// import { v4 as uuidv4 } from "uuid";
import Footer from "../components/Footer.tsx";
// import { TextInput } from '@mantine/core';
// import { IconAt } from '@tabler/icons-react';

// type Expense = {
//   id: string;
//   name: string;
//   amount: number | string;
//   category: string;
// };

export default function ExpenseTracker() {
  // const [opened, setOpened] = useState(false);
  // const [expenses, setExpenses] = useState<Expense[]>([]);
  // const categories = ["Food", "Transport", "Entertainment"];
  // const icon = <IconAt size={16} />;

  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
        <div style={{ maxWidth: 600, margin: "auto", padding: 20 }}>
          <Title order={2} mb="md">
            Expense Tracker
          </Title>
          <Button>Add Expense Item</Button>
          {
            
          }

          <Divider my="md" />
          {/* Type additional total cost here. */}
          <Title order={4}>Total cost: {} Baht</Title>
          <Stack my="sm">{/* Type additional text here. */}</Stack>

          <Divider my="md" />
          {/* Type additional card here. */}
          <Stack>{/* Type additional expense card list here. */}</Stack>
        </div> 
      <Footer courseName="CPE207" year="2025" fullName="Pakin Nakapong" studentId="670612126"></Footer>
    </div>
    
  )
}