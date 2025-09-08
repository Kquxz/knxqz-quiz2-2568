import { type FooterProps} from "../libs/Footer";
import { Group, Text } from "@mantine/core";
export default function Footer(Props: FooterProps) {
  return (
    <Group p="md" justify="center">
      <Text >
        ©{Props.courseName}-{Props.year} {Props.fullName} {Props.studentId}. All rights reserved.
      </Text>
    </Group>
  );
}
