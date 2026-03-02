<?php

/**
 * Copyright © 2016-present Spryker Systems GmbH. All rights reserved.
 * Use of this software requires acceptance of the Spryker Marketplace License Agreement. See LICENSE file.
 */

namespace Spryker\Zed\MerchantRelationshipMerchantPortalGui\Communication\GuiTable\Mapper;

use Generated\Shared\Transfer\GuiTableDataResponseTransfer;
use Generated\Shared\Transfer\MerchantRelationshipCollectionTransfer;
use Generated\Shared\Transfer\MerchantRelationshipCriteriaTransfer;
use Generated\Shared\Transfer\MerchantRelationshipTableCriteriaTransfer;

interface MerchantRelationshipGuiTableMapperInterface
{
    public function mapMerchantRelationshipTableCriteriaTransferToMerchantRelationshipCriteriaTransfer(
        MerchantRelationshipTableCriteriaTransfer $merchantRelationshipTableCriteriaTransfer,
        MerchantRelationshipCriteriaTransfer $merchantRelationshipCriteriaTransfer
    ): MerchantRelationshipCriteriaTransfer;

    public function mapMerchantRelationshipCollectionTransferToGuiTableDataResponseTransfer(
        MerchantRelationshipCollectionTransfer $merchantRelationshipCollectionTransfer,
        GuiTableDataResponseTransfer $guiTableDataResponseTransfer
    ): GuiTableDataResponseTransfer;
}
