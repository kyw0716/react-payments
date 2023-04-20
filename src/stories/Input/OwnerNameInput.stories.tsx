import React, { useRef, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { OwnerNameInput } from '../../components/input/OwnerNameInput';

const meta = {
  title: 'Example/Input',
  component: OwnerNameInput,
  tags: ['autodocs'],
} satisfies Meta<typeof OwnerNameInput>;

export default meta;

export const OwnerName = () => {
  const ownerNameInputRef = useRef(null);
  const [ownerName, setOwnerName] = useState('');

  return (
    <OwnerNameInput
      ownerNameInputRef={ownerNameInputRef}
      moveFocusToSecurityCode={() => {}}
      ownerName={ownerName}
      setOwnerName={setOwnerName}
    />
  );
};