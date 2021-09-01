import React, { useState } from 'react';
import { DataGridGroupPer } from '../../components/DataGridGroupPer/DataGridGroupPer';
import { TitleDataGrid } from '../../components/DataGridGroupPer/components/TitleDataGrid'

type Props = {};

export const GroupPermission: React.FC<Props> = () => {
    return (
        <div>
            <TitleDataGrid />
            <DataGridGroupPer />
        </div>
    )
}
